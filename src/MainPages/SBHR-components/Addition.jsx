import React, { useEffect } from 'react';
import './SBHRCompo.css';
import vdo1 from '../../Assets/add1.mp4'
import vdo2 from '../../Assets/add2.mp4'
import vdo3 from '../../Assets/add3.mp4'
import vdo4 from '../../Assets/add4.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Addition = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    })
  return (
    <div className='what-we-do'>
        <h1 data-aos="fade-up">What We Do</h1>
            <div className="video">
                <div className="vd">
                    <video src={vdo1} muted autoPlay loop />
                    <h3 data-aos="flip-left">We create unforgettable experiences</h3>
                </div>
                <div className="vd">
                    <video src={vdo2} muted autoPlay loop />
                    <h3 data-aos="flip-left">Stay relaxed and comfortable</h3>
                </div>
                <div className="vd">
                    <video src={vdo3} muted autoPlay loop />
                    <h3 data-aos="flip-left">Celebrate with made-to-order menus</h3>
                </div>
                <div className="vd">
                    <video src={vdo4} muted autoPlay loop />
                    <h3 data-aos="flip-left">Where are we ?...closer than you think</h3>
                </div>
            </div>
    </div>
  )
}

export default Addition
