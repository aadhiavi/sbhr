import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./ImageSlider.css"

const ImageSlider2 = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const intervalId = setInterval(nextSlide, 4000); 
      return () => clearInterval(intervalId);
    }, [images.length]); 

    return (
      <div className="slider">
        <button className='btn' onClick={prevSlide}><FaChevronLeft/></button>
        <div className="slider-images">
          <img src={images[currentIndex].src} alt="Slide" />
          <span  className='side-info'>{images[currentIndex].msg}</span>
        </div>
        <button className='btn' onClick={nextSlide}><FaChevronRight/></button>
      </div>
    );
  };
  
  export default ImageSlider2;