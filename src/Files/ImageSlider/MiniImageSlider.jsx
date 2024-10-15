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
        <div style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
          transition: "transform 0.5s ease-in-out"
        }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniImageSlider;



