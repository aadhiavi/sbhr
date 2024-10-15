import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]); 

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [images.length, nextSlide]);

  return (
    <div className="slider">
      <button className='btn' onClick={prevSlide}><FaChevronLeft /></button>
      <div className="slider-images">
        <img src={images[currentIndex]} alt="Slide" />
      </div>
      <button className='btn' onClick={nextSlide}><FaChevronRight /></button>
    </div>
  );
};

export default ImageSlider;


