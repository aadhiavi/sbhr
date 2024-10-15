import React from 'react'
import {HomeBody} from './HomeBody'
import { GntrImages } from '../../Files/Store/ImagesStore'
import { HomeGntrContent } from './HomeContent'
import samaikya from '../../Assets/samaikyatha.jpeg'
import Footer from '../../Components/Footer/Footer'
import { GntrFooter } from '../../Files/Store/Store'

const Guntur = () => {
    return (
        <div>
            <div className="HomeSlider">
                <img src={samaikya} alt="" />
            </div>
            <HomeBody images={GntrImages[0]} content={HomeGntrContent[0].content} src={HomeGntrContent[0].link}  imagePosition="left" />
            <HomeBody images={GntrImages[1]} content={HomeGntrContent[1].content} src={HomeGntrContent[1].link} imagePosition="right" />
            <HomeBody images={GntrImages[2]} content={HomeGntrContent[2].content} src={HomeGntrContent[2].link} imagePosition="left" />
            <Footer {...GntrFooter}/>
        </div>
    )
}

export default Guntur;