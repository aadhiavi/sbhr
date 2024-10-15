import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageSlider from '../../Files/ImageSlider/ImageSlider';
import '../MainRoute.css'
import { Link } from 'react-router-dom';
import Model from '../../Components/EnquiryForm/Model';

export const HomeBody = ({ images, content, imagePosition, src }) => {
    const [model, setModel] = useState(false)
    const handleClickModel = () => {
        setModel(!model)

    }
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const imageLeft = () => (
        <div className='left'>
            <div className='image-section-slider' ><ImageSlider images={images} /></div>
            <div className='content' >
                {content}
                <div className="btn-link"><Link to={src}>SEE MORE</Link><Link onClick={handleClickModel}>BOOK NOW</Link></div>
            </div>
        </div>

    );


    const imageRight = () => (
        <div className='right' >
            <div className='content' >
                {content}
                <div className="btn-link"><Link to={src}>SEE MORE</Link><Link onClick={handleClickModel}>BOOK NOW</Link></div>
            </div>
            <div className='image-section-slider' ><ImageSlider images={images} /></div>

        </div>
    );

    return (
        <>
            {imagePosition === 'left' ? imageLeft() : imageRight()}
            {model && <Model handleClickModel={handleClickModel} />}
        </>
    );

};

export const SectionBody = ({ images, content }) => {
    const [model, setModel] = useState(false)
    const handleClickModel = () => {
        setModel(!model)

    }
    return (
        <div className='m-left'>
            <div className='image-section-slider' ><ImageSlider images={images} /></div>
            <div className='content'>{content}
                <div className="btn-link"><Link onClick={handleClickModel}>BOOK NOW</Link></div>
            </div>

            {model && <Model handleClickModel={handleClickModel} />}
        </div>
    )
}
