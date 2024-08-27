import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import PageHelmet from '../components/PageHelmet';
import axios from 'axios';
import API_BASE_URL from '../config';
import withAuthRedirect from '../hoc/withAuthRedirect'; // Import the HOC
const AddDevice = ({ setStatusMessage }) => {
  const [deviceID, setDeviceID] = useState('');
  const [device_type_id, setDeviceTypeID] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { device } = location.state || {};

  useEffect(() => {
    if (device) {
      setDeviceID(device.device_id);
      setDeviceTypeID(device.device_type_id);
    }
  }, [device]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!deviceID || !device_type_id) {
        throw new Error('Please fill in all required fields.');
      }
      if (device) {
        await axios.put(`${API_BASE_URL}/device/update/${device.tab_id}/`, {
          device_id: deviceID,
          device_type: device_type_id,
        });
      } else {
        await axios.post(`${API_BASE_URL}/device/add/`, {
          device_id: deviceID,
          device_type: device_type_id,
        });
        // setStatusMessage('Device added successfully');
      }
      navigate('/master/devices');
    } catch (error) {
      console.error('Error adding/updating device:', error.message);
      // alert(error.message);
    }
  };

  return (
    <Container fluid className="section">
      <PageHelmet />
      <Row className="g-3 justify-content-center">
        <Col lg={12} className="mb-4">
          <PageTitle />
        </Col>
        <Col lg={10}>
          <Card className="main-card">
            <CardBody>
              <Form className="main-form" onSubmit={handleSubmit}>
                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Device ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Device ID"
                        value={deviceID}
                        onChange={(e) => setDeviceID(e.target.value)}
                        required // Make the field required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Device Type</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={device_type_id}
                        onChange={(e) => setDeviceTypeID(e.target.value)}
                        required // Make the field required
                      >
                        <option value="">Select Device Type</option>
                        <option value="1">Bluetooth</option>
                        <option value="2">WiFi</option>
                        <option value="3">GSM</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="text-center">
                    <Button type="submit" className="btn-main me-2">
                      Submit
                    </Button>
                    <Button
                      as={Link}
                      to="/master/devices"
                      className="btn-cancel"
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthRedirect(AddDevice);
