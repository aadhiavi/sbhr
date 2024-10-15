import React from 'react'
import './MainRoute.css';
import { dining, halls, open, rooms } from '../Files/Store/ImagesStore';
import { Link } from 'react-router-dom';
import MiniImageSlider from '../Files/ImageSlider/MiniImageSlider';
import vd from '../Assets/vd7.mp4';
import Op2 from '../Assets/ss-tank.png';
import Footer from '../Components/Footer/Footer';
import { SbhrFooter } from '../Files/Store/Store';
import parking from '../Assets/par.jpg'
import Addition from './SBHR-components/Addition';



const SBHR = () => {
    return (
        <div className='home'>
            <div className="HomeSliderVideo">
                <video src={vd} muted autoPlay loop />
            </div>

            <div className='intro'>
                <div className="home-line"><span></span><h2>Stay at Suhana Beulah Hotels & Resorts</h2><span></span>
                </div>
                <p>Suhana Beulah Hotels and Resorts features Samadhana Sadhan and Samaikyatha Sadhan, year-round conference and retreat centers in a serene, pollution-free environment. Catering to Christian groups and ministries across India, these venues accommodate 10 to 1,000 people, with comfortable hotel-style lodging. Guests can enjoy recreational activities and savor local cuisine, including Hyderabadi Biryani and South Indian specialties. With a focus on elegance and memorable experiences, expert event coordinators assist in planning every detail for productive retreats. For more information or to schedule a tour, please visit the website or contact the event coordinator directly.</p>
            </div>
            <div className="grid-images">
                <div className='filter'></div>
                <h2>Our Facilities</h2>
                <div className="grid-box">
                    <Link to='/rooms'>
                        <div className="box">
                            <div className="image-container">
                                <MiniImageSlider images={rooms} />
                            </div>
                            <div className='box-info'>
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
                            <div className='box-info'>
                                <h3>Big Hall, Chappal, Meeting Room</h3>
                                <p>Starting from <button>Rs:14,999 - 79,999. /-</button></p>
                            </div>
                        </div>
                    </Link>
                    <Link to='dining'>
                        <div className="box">
                            <div className="image-container">
                                <MiniImageSlider images={dining} />
                            </div>
                            <div className='box-info'>
                                <h3>Dining Area</h3>
                                <p>Starting from <button>Rs:24,999 - 49,999. /-</button></p>
                            </div>
                        </div>
                    </Link>
                        <div className="box">
                            <div className="image-container">
                                <MiniImageSlider images={open} />
                            </div>
                            <div className='box-info'>
                                <h3>Outdoor Events,Lawn,Open Theatre</h3>
                                <p>Starting from <button>Rs:000000/-</button></p>
                            </div>
                        </div>
                    <div className="box">
                        <div className="image-container">
                            <img src={Op2} alt="" />
                        </div>
                        <div className='box-info'>
                            <h3>Baptism Tank</h3>
                            <p>Symbolizing purification & initiation into the faith.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image-container">
                            <img src={parking} alt="" />
                        </div>
                        <div className='box-info'>
                            <h3>Parking Area</h3>
                            <p>Spacious parking lot available for easy access.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Addition />
            <Footer {...SbhrFooter} />
        </div>
    )
}

export default SBHR;