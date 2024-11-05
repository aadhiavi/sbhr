import React, { useEffect, useRef, useState } from 'react';
import './SBHRCompo.css';
import img from '../../Assets/samadhana.jpg';
import img1 from '../../Assets/gg.jpg'
import img2 from '../../Assets/Coming soon.gif'
import { MdInsertPhoto } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa";
import ModelVideo from './ModelVideo';
import ModelGallary from './ModelGallery';
import video1 from '../../Assets/ssvdo.mp4'
import video2 from '../../Assets/gntrVdo.mp4'
import { Link } from 'react-router-dom';
import Model from '../../Components/EnquiryForm/Model';
import { Gntr, Hyd } from '../../Files/Store/ImagesStore';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Resorts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modelVideo, setModelVideo] = useState(false)
    const [modelGallary, setModelGallary] = useState(false)
    const [model, setModel] = useState(false)
    const infoDataRef = useRef(null);

    const handleClickModel = () => {
        setModel(!model)

    }

    const handleClickModelVideo = () => {
        setModelVideo(!modelVideo)

    }
    const handleClickModelGallary = () => {
        setModelGallary(!modelGallary)

    }

    const list = [
        {
            pic: img,
            line1: "Samadhana Sadan",
            line2: "christian resort centre and most exclusive use venues in Hyderabad",
            line3: "The only christian resort centre and one of the most exclusive use venues in Hyderabad near Shameerpet. Whether you are planning a wedding, a birthday party, an anniversary celebration, an overnight retreat or any other christian event, the stunning backdrop of Samadhana Sadan provides a majestic setting, with 12 acres of private countryside for guests to enjoy",
            link: "/hyderabad",
            photos: Hyd,
            vdo: video1,
        },
        {
            pic: img1,
            line1: "Samaikyatha Sadan",
            line2: "christian resort centre and most exclusive use venues in Guntur",
            line3: "The only christian resort centre and one of the most exclusive use venues in Guntur near Chowdavaram Whether you are planning a wedding, a birthday party, an anniversary celebration, an overnight retreat or any other christian event, the stunning backdrop of Samaikyatha Sadan provides a majestic setting, with 12 acres of private countryside for guests to enjoy",
            link: "/guntur",
            photos: Gntr,
            vdo: video2,
        },
        {
            pic: img2,
            line1: "Chennai Beach Front",
            line2: "Coming soon",
            line3: "Something big is coming",
            link: "/bangalore",
            photos: [img2],


        },
        {
            pic: img2,
            line1: "Bangalore",
            line2: "Coming soon",
            line3: "Something big is coming",
            link: "#",
            photos: [img2],

        },
        {
            pic: img2,
            line1: "Kodai Kanal Hill Station",
            line2: "Coming soon",
            line3: "Something big is coming",
            link: "#",
            photos: [img2],

        },
        {
            pic: img2,
            line1: "Madurai",
            line2: "Coming soon",
            line3: "Something big is coming",
            link: "#",
            photos: [img2],

        },
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
        const element = infoDataRef.current;
        const topPosition = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    };
    useEffect(()=>{
        AOS.init({duration:2000});
    })
    return (
        <div className='companiesList'>
            <h1 data-aos="fade-up">Our Group of Hotels & Resorts</h1>
            <div className="companies">
                <div className="info-images">
                    <img data-aos="fade-up" src={list[activeIndex].pic} alt="" />
                </div>
                <div className="info-data" ref={infoDataRef}>
                    <h2 data-aos="fade-up">{list[activeIndex].line1}</h2>
                    <p data-aos="fade-up">{list[activeIndex].line3}</p>
                    <span data-aos="fade-up">
                        <Link to={list[activeIndex].link}>SEE MORE</Link>
                        <Link onClick={handleClickModel}>CONTACT-US</Link>
                    </span>
                    <div data-aos="fade-up" className='photo-video'>
                        <div onClick={handleClickModelGallary}><MdInsertPhoto /></div>
                        <div onClick={handleClickModelVideo}><FaFileVideo /></div>
                    </div>
                </div>

                <div className="company-list">
                    {list.map((item, index) => (
                        <div
                            className={`company ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => handleClick(index)}
                        >
                            <img src={item.pic} alt="hyderabad" />
                            <span>
                                <h4>{item.line1}</h4>
                                <p>{item.line2}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {
                modelVideo && <ModelVideo Srcvdo={list[activeIndex].vdo} handleClickModelVideo={handleClickModelVideo} />
            }
            {
                modelGallary && <ModelGallary SlideImages={list[activeIndex].photos} handleClickModelGallary={handleClickModelGallary} />
            }
            {
                model && <Model handleClickModel={handleClickModel} />
            }
        </div>
    )
}

export default Resorts;