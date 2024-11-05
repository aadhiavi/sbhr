import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoIosPlay } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import './SBHRCompo.css';
import img1 from '../../Assets/re (1).jpg';
import img2 from '../../Assets/re (2).jpg';
import img3 from '../../Assets/re (3).jpg';
import img4 from '../../Assets/re (4).jpg';
import { RxExternalLink } from "react-icons/rx";
import { IoStarSharp } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'

const reviews = [
    {
        img: img1,
        link: "https://youtu.be/-FyiRgvgi2A?si=Q9CrsK2HIa9zXzdt",
        name: 'MV Rani',
        words: "My name is MV Rani from Malakpet. Visiting Samadhana Sadan with my church associates was a delightful surprise; the pleasant weather and serene environment were unlike anything in the city. I explored every corner and plant, and if given the chance, I would definitely return again.",
    },
    {
        img: img2,
        link: "https://youtu.be/Mi0RpUBjo_o?si=Bj_KOIFt74skkjBe",
        words: "My native place is Boduppal, and I visited Samadhana Sadan in Ponnala, where the spacious halls and delicious food made us very happy. We truly enjoyed our time there, finding peace and joy for our age group!",
        name: 'Asha Latha',
    },
    {
        img: img3,
        link: 'https://youtube.com/shorts/iaGhw_q-Bzc?si=y1syAOHSxUsWxj21',
        words: "I'm Mrs. Sri Supriya Joel from Bethlehem Church in Malakpet. Our church group recently visited Samadhana Sadan for an outdoor retreat and had a wonderful experience. I highly recommend it as an ideal gathering place and plan to revisit!",
        name: 'Mrs. Sri Supriya Joel',
    },
    {
        img: img4,
        link: "https://youtu.be/Aj6ETGAZak0?si=yz_6-QHpFokzs0Oq",
        words: "I'm Dr. Ester, and this place offers a wonderfully peaceful atmosphere, ideal for spiritual groups. I appreciate everything about it, from the serene surroundings to the thoughtful arrangements.",
        name: 'Dr. Ester',
    },
];

const Testimonies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalSlides = reviews.length;
    const slideIntervalTime = 6000;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

    const togglePause = () => setIsPaused((prev) => !prev);

    useEffect(() => {
        let slideInterval;
        if (!isPaused) {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
        }
        return () => clearInterval(slideInterval);
    }, [isPaused, nextSlide]);

    useEffect(()=>{
        AOS.init({duration:2000});
    })

    return (
        <div className='maim-class-testimony'>
            <h2  data-aos="fade-up">Our Clients Say!!!</h2>
            <div className="tesimonies">
                <div className="testimonies-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {reviews.map((item, index) => (
                        <div key={index} className={`task`}>
                            <a href={item.link}>
                                <img src={item.img} alt={item.name} />
                                <span><RxExternalLink /></span>
                            </a>
                            <div className="task-info">
                                <h4>{item.name}</h4>
                                <p>{item.words}</p>
                                <span><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testimonies-btn">
                    <button onClick={prevSlide}>
                        <FiChevronLeft />
                    </button>
                    <button onClick={nextSlide}>
                        <FiChevronRight />
                    </button>
                    <button onClick={togglePause}>
                        {isPaused ? <IoIosPlay /> : <IoPauseOutline />}
                    </button>
                </div>
                <div className="btn-fillers">
                    {reviews.map((_, index) => (
                        <span
                            key={index}
                            className={`filler ${index === currentSlide ? 'task-active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonies;



