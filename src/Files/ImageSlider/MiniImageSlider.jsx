import React, { useState, useEffect } from 'react';
import "./ImageSlider.css";

const MiniImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length, interval]);

  return (
    <div className="slider">
      <div className="slider-images">
        <img src={images[currentIndex]} alt="Slide" />
      </div>
    </div>
  );
};

export default MiniImageSlider;



