import React from 'react';
import './SBHRCompo.css';
import vdo1 from '../../Assets/add1.mp4'
import vdo2 from '../../Assets/add2.mp4'
import vdo3 from '../../Assets/add3.mp4'
import vdo4 from '../../Assets/add4.mp4'

const Addition = () => {
  return (
    <div className='what-we-do'>
        <h1>What We Do</h1>
            <div className="video">
                <div className="vd">
                    <video src={vdo1} muted autoPlay loop />
                    <h3>We create unforgettable experiences</h3>
                </div>
                <div className="vd">
                    <video src={vdo2} muted autoPlay loop />
                    <h3>Stay relaxed and comfortable</h3>
                </div>
                <div className="vd">
                    <video src={vdo3} muted autoPlay loop />
                    <h3>Celebrate with made-to-order menus</h3>
                </div>
                <div className="vd">
                    <video src={vdo4} muted autoPlay loop />
                    <h3>Where are we ?...closer than you think</h3>
                </div>
            </div>
    </div>
  )
}

export default Addition
