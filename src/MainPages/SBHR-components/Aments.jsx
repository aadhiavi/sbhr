import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aments = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    })
    return (
        <div className='main-ament-class'>
            <h1 data-aos="fade-up">Amenities</h1>
            <div className='amenties'>

                <div data-aos="fade-up" className="ament ament1">
                    <h2>In Room</h2>
                    <ul>
                        <li>Free WiFi</li>
                        <li>Free Satellite TV</li>
                        <li>Direct Dial Phone</li>
                        <li>Bathrobes</li>
                        <li>Coffee Machine</li>
                        <li>Comfort amenties</li>
                    </ul>
                </div>
                <div data-aos="fade-up" className="ament">
                    <h2>In Resort</h2>
                    <ul>
                        <li>Big Lawn</li>
                        <li>Garnden Area</li>
                        <li>Tennis Court</li>
                        <li>Swimming Pool</li>
                        <li>Library</li>
                        <li>Spacious Parking</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aments