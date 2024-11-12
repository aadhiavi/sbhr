import React, { useEffect, useState } from 'react'
import './MainRoute.css';
import { dining, halls, open, rooms } from '../Files/Store/ImagesStore';
import { Link } from 'react-router-dom';
import MiniImageSlider from '../Files/ImageSlider/MiniImageSlider';
import vd from '../Assets/SBHR Group.mp4';
import Op2 from '../Assets/Hyd/ss-tank (1).jpg';
import Footer from '../Components/Footer/Footer';
import { Overview, OverviewButton, SbhrFooter } from '../Files/Store/Store';
import parking from '../Assets/par.jpg'
import Addition from './SBHR-components/Addition';
import Resorts from './SBHR-components/Resorts';
import Testimonies from './SBHR-components/Testimonies';
import Aments from './SBHR-components/Aments';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sama from '../Assets/Hyd/eve/eve101.jpg'



const SBHR = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    useEffect(() => {
        AOS.init({ duration: 2000 });
    })

    return (
        <div className='home'>
            <div className="HomeSliderVideo">
                <video controls preload="auto" poster={sama} width="720">
                    <source src={vd} type="video/mp4"/>
                </video>
            </div>
            <div data-aos="fade-up" data-aos-duration="900" className="Overview-container">
                {show ? <OverviewButton  onClose={handleClick} /> : <Overview onClose={handleClick} />}
            </div>

            <div className='intro'>
                <div data-aos="fade-up" className="home-line"><span></span><h2>Stay at Suhana Beulah Hotels & Resorts</h2><span></span>
                </div>
                <p data-aos="fade-up">Suhana Beulah Hotels and Resorts features Samadhana Sadhan and Samaikyatha Sadhan, year-round conference and retreat centers in a serene, pollution-free environment. Catering to Christian groups and ministries across India, these venues accommodate 10 to 1,000 people, with comfortable hotel-style lodging. Guests can enjoy recreational activities and savor local cuisine, including Hyderabadi Biryani and South Indian specialties. With a focus on elegance and memorable experiences, expert event coordinators assist in planning every detail for productive retreats. For more information or to schedule a tour, please visit the website or contact the event coordinator directly.</p>
            </div>
            <Addition />
            <Resorts />
            <div className="mapping">
                <div className="map-view">
                    <iframe title='map' src="https://www.google.com/maps/d/u/0/embed?mid=1bRGssm0-lqKDyt4zS3ugDkxAgGDuhx4&ehbc=2E312F&noprof=1" ></iframe>
                </div>
                <div className="branches">
                    <h2 data-aos="fade-up">Our Promise</h2>
                    <p data-aos="fade-up">Discover our stunning beachfront resorts, versatile convention halls, and enchanting hill station retreats, where luxury and functionality converge. Our beachfront resorts offer serene getaways with breathtaking ocean views, modern amenities, and recreational activities for relaxation. The hill station locations provide a refreshing escape with cool breezes and picturesque landscapes, perfect for nature lovers. Meanwhile, our convention halls feature state-of-the-art technology and customizable spaces, ideal for any event. With professional support and exceptional catering, we ensure every detail is covered. Experience the perfect backdrop for your next escape or gathering with us!</p>
                </div>
            </div>


            <div className="grid-images">
                <div className='filter'></div>
                <h2 data-aos="fade-up">Our Facilities</h2>
                <div className="grid-box">
                    <Link to='/rooms'>
                        <div className="box">
                            <div className="image-container">
                                <MiniImageSlider images={rooms} />
                            </div>
                            <div data-aos="fade-up" className='box-info'>
                                <h3>Executive, Deligate, Dormitory Rooms</h3>
                                <p>Starting from <button>Rs:999 - 4,499. /-</button></p>
                            </div>
                        </div>
                    </Link>
                    <Link to='event'>
                        <div className="box">
                            <div className="image-container">
                                <MiniImageSlider images={halls} />
                            </div>
                            <div data-aos="fade-up" className='box-info'>
                                <h3>Convention Hall, Chappal, Meeting Room</h3>
                                <p>Starting from <button>Rs:19,999 - 79,999. /-</button></p>
                            </div>
                        </div>
                    </Link>
                    <Link to='dining'>
                        <div className="box">
                            <div className="image-container">
                                <MiniImageSlider images={dining} />
                            </div>
                            <div data-aos="fade-up" className='box-info'>
                                <h3>Dining Area</h3>
                                <p>Starting from <button>Rs:24,999 - 49,999. /-</button></p>
                            </div>
                        </div>
                    </Link>
                    <div className="box">
                        <div className="image-container">
                            <MiniImageSlider images={open} />
                        </div>
                        <div data-aos="fade-up" className='box-info'>
                            <h3>Outdoor Events,Lawn,Open Theatre</h3>
                            <p>Outdoor events like lawn parties and open theatres offer vibrant, natural experiences.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image-container">
                            <img src={Op2} alt="" />
                        </div>
                        <div data-aos="fade-up" className='box-info'>
                            <h3>Baptism Tank</h3>
                            <p>Symbolizing purification & initiation into the faith.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image-container">
                            <img src={parking} alt="" />
                        </div>
                        <div data-aos="fade-up" className='box-info'>
                            <h3>Parking Area</h3>
                            <p>Spacious parking lot available for easy access.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Aments />
            <Testimonies />
            <Footer {...SbhrFooter} />
        </div>
    )
}

export default SBHR;