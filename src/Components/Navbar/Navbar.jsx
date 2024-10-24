import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/SBHR.jpg';
import { TfiHome } from 'react-icons/tfi';
import insta from '../../Assets/Instagram-Logo.wine.svg';
import Facebook from '../../Assets/Facebook-f_Logo-Blue-Logo.wine.svg';
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaTwitter } from 'react-icons/fa';
import maps from '../../Assets/Google_Maps-Icon-Logo.wine.svg';
import { BsListNested } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Model from '../EnquiryForm/Model';
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [model, setModel] = useState(false)

  const handleClickModel = () => {
    setModel(!model)

  }

  const handleClick = () => {
    setClick(!click);
  };
  const handleMenuItemClick = () => {
    setClick(false);
  };

  const phoneNumber = '917793979849';
  const message = 'Hello!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='navbar-container'>
      <div className='m-nav'>
        <div className='logo-nav'>
          <NavLink to='/'>
            <img src={logo} alt='Company Logo' />
          </NavLink>
          <NavLink to='/'>
            <TfiHome className='home-icon'/>
          </NavLink>
          <span className='quote' onClick={handleClickModel}>GET A QUOTE</span>
        </div>
        
        <div className={click ? 'menu active' : 'menu'}>
          <nav onClick={handleMenuItemClick}>
            <ul>
              <li><NavLink to='/hyderabad'>Hyderabad</NavLink></li>
              <li><NavLink to='/guntur'>Guntur</NavLink></li>
              <li><NavLink to='/bangalore'>Bangalore</NavLink></li>
              {/* <li><NavLink to='/pondicherry'>Pondicherry</NavLink></li> */}
              <li><NavLink to='/careers'>Careers</NavLink></li>
            </ul>

            <div className="enquiry">
              <a href='tel:+91-7799234560'>Call : +91-7799234560</a>
              <a href='tel:+91-7793979849'>Call : +91 7793979849</a>
              <a href='mailto:sbhrhyd@gmail.com'>Mail : sbhr@gmail.com</a>
              <div className='social-burger'>
                <a href='https://www.instagram.com/samadhanasadan/' >
                  <img style={{ width: '32px', height: '32px' }} src={insta} alt='Instagram' />
                </a>
                <a href='https://www.facebook.com/profile.php?id=61558738804342'>
                  <img style={{ width: '32px', height: '32px' }} src={Facebook} alt='Facebook' />
                </a>
                <a href='https://maps.app.goo.gl/8okWkWJcsMNXELrj7' target='_blank' rel='noopener noreferrer'>
                  <img style={{ width: '34px', height: '34px' }} src={maps} alt='Google Maps' />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter style={{ color: 'white' }} size={21} />
                </a>
              </div>
            </div>
          </nav>

          <div className='social'>
            <a className='call cal1' href='tel:+91-7793979849'>
              <FaPhone size={15} />
            </a>
            <a className='call cal2' href='mailto:sbhrhyd@gmail.com'>
              <BiLogoGmail size={20} />
            </a>
            <a className='call cal3' href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
              <RiWhatsappFill size={18} />
            </a>
          </div>
          <div className='btn-btn'>
            <button onClick={handleClickModel}>ENQUIRY</button>
          </div>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? <MdClose style={{ color: 'white' }} size={30} /> : <BsListNested style={{ color: 'white' }} size={30} />}
        </div>
        
      </div>
      {
        model && <Model handleClickModel={handleClickModel} />
      }
    </div>
  );
};

export default Navbar;
