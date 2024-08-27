import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import './style.css';
import Signup from './pages/SignUp';
import Customers from './pages/Customers';
import AddCustomer from './pages/AddCustomer';
import Devices from './pages/Devices';
import District from './pages/District';
import Taluk from './pages/Taluk';
import Village from './pages/Village';
import PropertyRegistration from './pages/PropertyRegistration';
import AddDevice from './pages/AddDevice';
import AddDistrict from './pages/AddDistrict';
import AddTaluk from './pages/AddTaluk';
import AddVillage from './pages/AddVillage';
import AddPropertyRegistration from './pages/AddPropertyRegistration';
import PropertyDevice from './pages/PropertyDevice';
import AddPropertyDevice from './pages/AddPropertyDevice';
import Dashboard from './pages/Dashboard';
import SurveyDetails from './pages/SurveyDetails';
import SurveyDetailsTwo from './pages/SurveyDetailsTwo';

function App() {
  return (
    <BrowserRouter basename="/web/landshield/">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/master/devices" element={<Devices />} />
          <Route path="/master/district" element={<District />} />
          <Route path="/master/taluk" element={<Taluk />} />
          <Route path="/master/village" element={<Village />} />
          <Route
            path="/property-registration"
            element={<PropertyRegistration />}
          />
          <Route path="/property-device" element={<PropertyDevice />} />
          <Route path="/master/devices/add-device" element={<AddDevice />} />
          <Route
            path="/master/district/add-district"
            element={<AddDistrict />}
          />
          <Route path="/master/taluk/add-taluk" element={<AddTaluk />} />
          <Route path="/master/village/add-village" element={<AddVillage />} />
          <Route path="/customers/add-customer" element={<AddCustomer />} />
          <Route
            path="/property-registration/add-property-registration"
            element={<AddPropertyRegistration />}
          />
          <Route
            path="/property-device/add-property-device"
            element={<AddPropertyDevice />}
          />
          <Route
            path="/property-device/survey-details"
            element={<SurveyDetails />}
          />
          <Route
            path="/property-device/survey-details/:id"
            element={<SurveyDetails />}
          />

          {/* Updated path for SurveyDetails component */}
          <Route
            path="/property-device/survey-details2"
            element={<SurveyDetailsTwo />}
          />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
