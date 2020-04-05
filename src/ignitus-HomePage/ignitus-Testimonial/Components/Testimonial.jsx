/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';
import i1 from '../images/i1.png';
import i2 from '../images/i2.png';
import i3 from '../images/i3.png';
import i4 from '../images/i4.png';

const Testimonial = ({ testimonialData, getTestimonialData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (event) => {
    const { target: { id } } = event;
    if (id === 'firstImage') {
      setCurrentIndex(0);
    } else if (id === 'secondImage') {
      setCurrentIndex(1);
    } else if (id === 'thirdImage') {
      setCurrentIndex(2);
    } else if (id === 'fourthImage') {
      setCurrentIndex(3);
    }
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  return (
    <div className="testimonial">
      <div className="testimonials-title">Testimonials</div>
      <div className="testimonial-wrapper">
        {testimonialData.length > 0 && (
          <div className="carousel-content">
            <div className="text-box">
              <p>{testimonialData[currentIndex].description}</p>
            </div>
            <div className="avatar">
              <img src={i1} />
            </div>
            <p className="name">{testimonialData[currentIndex].author}</p>
            <p className="designation">
              {testimonialData[currentIndex].authorDesignation}
            </p>
          </div>
        )}
        <div className="nav-avatar">
          <img id="firstImage" src={i1} alt="" onClick={handleClick} />
          <img id="secondImage" src={i2} alt="" onClick={handleClick} />
          <img id="thirdImage" src={i3} alt="" onClick={handleClick} />
          <img id="fourthImage" src={i4} alt="" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(Testimonial);
