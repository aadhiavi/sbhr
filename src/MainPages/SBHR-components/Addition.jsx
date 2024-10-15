import React from 'react'
import img1 from '../../Assets/serv.jpg';
import img2 from '../../Assets/serv1.png'
import img3 from '../../Assets/ser2.png'
import img4 from '../../Assets/sev3.png'
import './SBHRCompo.css';

const Addition = () => {

    const addinfo = [
        {
            line1: 'We create unforgettable experiences',
            line2: 'Be a Wedding, Birthday Party or Anniversary Celebrations at Samadhana Sadhan & Samaikytha Sadhan the only Christian Resort Center in Hyderabad, Guntur',
            img: img1
        },
        {
            line1: 'Stay relaxed and comfortable',
            line2: 'We offer meeting and delegate rooms for 10 to 1000 people, along with spacious executive double-occupancy accommodations, luxurious 2 BHKs, and dorms with 4, 8, and 40 beds.',
            img: img2
        },
        {
            line1: 'Celebrate with made-to-order menus',
            line2: 'We will work closely with you to craft curated menus that will bring your food vision to life.',
            img: img3
        },
        {
            line1: 'Where are we ?..... closer than you think',
            line2: 'Getting away from it all is easier than you think, from busy life Find us along a quaint little pathway that leads to something close to paradise',
            img: img4
        },
    ]
    return (
        <div className='services'>
            <h2>Our Services</h2>
            <div className='addons'>
                {addinfo.map((item, i) => (
                    <div className="addon" key={i}>
                        <div className="add-info">
                            <h3>{item.line1}</h3>
                            <p>{item.line2}</p>
                        </div>
                        <div className="add-img">
                            <img src={item.img} alt="" />
                        </div>
                    </div>))}
            </div>
        </div>

    )
}

export default Addition
