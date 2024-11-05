import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import SBHR from './MainPages/SBHR';
import MainRoute from './MainPages/MainRoute';
import { FaPhoneAlt } from 'react-icons/fa';
import insta from './Assets/Instagram-Logo.wine.svg';
import Facebook from './Assets/Facebook-f_Logo-Blue-Logo.wine.svg';
import maps from './Assets/Google_Maps-Icon-Logo.wine.svg';
import ExecutiveRooms from './MainPages/SBHR-components/ExecutiveRooms';
import AdminPanel from './Components/CityForm/AdminPanel';
import Events from './MainPages/SBHR-components/Events';
import ScrollgToTop from './Components/ScrollgToTop';
import Dining from './MainPages/SBHR-components/Dining';
import FormData from './Components/EnquiryForm/FormData';
import Career from './MainPages/SBHR-components/Career';
import Chat from './MainPages/Components/Chat';




function App() {
  return (
    <>
      <Router>
        <ScrollgToTop>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<SBHR />} />
              <Route path="/hyderabad/*" element={<MainRoute route="hyderabad" />} />
              <Route path="/guntur/*" element={<MainRoute route="guntur" />} />
              <Route path="/bangalore/*" element={<MainRoute route="bangalore" />} />
              <Route path="/pondicherry/*" element={<MainRoute route="pondicherry" />} />
              <Route path='/rooms' element={<ExecutiveRooms />} />
              <Route path='/event' element={<Events />} />
              <Route path='/dining' element={<Dining />} />
              <Route path='/admin-panel' element={<AdminPanel />} />
              <Route path='/admin' element={<FormData />} />
              <Route path='/careers' element={<Career />} />
            </Routes>
            <div className="contact-info">
              <a href='tel:+91-7799234560'>
                <FaPhoneAlt style={{ color: 'green' }} size={20} />
              </a>
              <a href='https://www.instagram.com/samadhanasadan/' >
                <img style={{ width: '38px', height: '38px' }} src={insta} alt='Instagram' />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61558738804342'>
                <img style={{ width: '37px', height: '37px' }} src={Facebook} alt='Facebook' />
              </a>
              <a href='https://maps.app.goo.gl/QLqdVP6Xxtbe3xsX8' target='_blank' rel='noopener noreferrer'>
                <img style={{ width: '34px', height: '34px' }} src={maps} alt='Google Maps' />
              </a>
            </div>
          </div>
        </ScrollgToTop>
        <Chat />
      </Router>
    </>
  );
}

export default App;
