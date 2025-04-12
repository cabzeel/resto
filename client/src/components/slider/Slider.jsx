import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import './Slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className='app__slider-container'>
      <div className='slider'>
        <button className="arrow left-arrow" onClick={goToPrevious}>
          <FaArrowCircleLeft />
        </button>
        
        <div className="slider-images">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${typeof image === 'string' ? image : image.default || image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              aria-hidden={index !== currentIndex}
            />
          ))}
        </div>
        
        <button className="arrow right-arrow" onClick={goToNext}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;