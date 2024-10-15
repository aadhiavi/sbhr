import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { BsHouse, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Visit from '../EnquiryForm/Visit';

const Footer = ({ subline, address, number, email1, email2, mapSrc }) => {
    return (
        <div className='footer'>
            <footer className='foot'>
                <div className='about-footer'>
                    <h3>ABOUT US</h3>
                    <p>{subline}</p>
                    <div className='use-links'>
                        <p>USEFUL LINKS</p>
                        <div><Link to='/'>Home</Link>
                            <Link to='/hyderabad'>Hyderabad</Link>
                            <Link to='/guntur'>Guntur</Link>
                            <Link to='/'>Careers</Link>
                        </div>
                    </div>
                </div>
                <div className='section-div'>
                    <h3>CONTACT US</h3>
                    <section>
                        <BsHouse aria-hidden="true" className='icon' />
                        <div>
                            <h4>Address</h4>
                            <p>{address}</p>
                        </div>
                    </section>

                    <section>
                        <BsTelephone aria-hidden="true" className='icon' />
                        <div>
                            <a href={`tel:${number.replace(/\s+/g, '')}`}><h4>{number}</h4></a>
                            <p>Call Now</p>
                        </div>
                    </section>

                    <section>
                        <MdOutlineEmail aria-hidden="true" className='icon' />
                        <div>
                            <a href={`mailto:${email1}`}><h4>{email1}</h4></a>
                            <a href={`mailto:${email2}`}><h4>{email2}</h4></a>
                            <p>Send us your query anytime!</p>
                        </div>
                    </section>
                </div>
                <div className='map'>
                    <h3>LOCATION</h3>
                    <iframe
                        src={mapSrc}
                        title="Map Location"
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                    />
                </div>
            </footer>
            <div className="copyright">
                Copyright ©2024 All rights reserved
                <Visit/>
                <span>
                    <a href='https://www.instagram.com/samadhanasadan/' >
                        <FaFacebook />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=61558738804342'>
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaYoutube />
                    </a>
                </span>
            </div>
        </div>
    );
}

Footer.propTypes = {
    subline: PropTypes.string,
    address: PropTypes.string,
    number: PropTypes.string,
    email1: PropTypes.string,
    email2: PropTypes.string,
    mapSrc: PropTypes.string,
};

export default Footer;
