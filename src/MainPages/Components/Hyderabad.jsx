import React, { useState } from 'react'
import { HomeBody } from './HomeBody'
import { HydImages } from '../../Files/Store/ImagesStore'
import { HomeContent } from './HomeContent'
import Footer from '../../Components/Footer/Footer'
import { HydFooter, OverviewButtonHyd, OverviewHyd } from '../../Files/Store/Store'

const Hyderabad = () => {
    const [open, setOpen] = useState(false)
    const handleClick =()=>{
        setOpen(!open)
    }
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className="Overview-container">
              {open ? <OverviewButtonHyd onClose={handleClick} /> : <OverviewHyd onClose={handleClick} />}
            </div>
            <HomeBody images={HydImages[0]} content={HomeContent[0].content} src={HomeContent[0].link} imagePosition="left" />
            <HomeBody images={HydImages[1]} content={HomeContent[1].content} src={HomeContent[1].link} imagePosition="right" />
            <HomeBody images={HydImages[2]} content={HomeContent[2].content} src={HomeContent[2].link} imagePosition="left" />
            <Footer {...HydFooter} />
        </div>
    )
}

export default Hyderabad