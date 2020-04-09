/* eslint-disable default-case */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';
import { Avatars } from '../constants';
import { Props } from '../types';

export const Testimonial: React.FC<Props> = withErrorBoundary(({ testimonialData, getTestimonialData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (event) => {
    const { target: { id } } = event;

    switch (id) {
      case '1':
        setCurrentIndex(0);
        break;

      case '2':
        setCurrentIndex(1);
        break;

      case '3':
        setCurrentIndex(2);
        break;

      case '4':
        setCurrentIndex(3);
        break;
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
              <img src={Avatars[currentIndex]} />
            </div>
            <p className="name">{testimonialData[currentIndex].author}</p>
            <p className="designation">
              {testimonialData[currentIndex].authorDesignation}
            </p>
          </div>
        )}
        <div className="nav-avatar">
          <img id="1" src={Avatars[0]} alt="" onClick={handleClick} />
          <img id="2" src={Avatars[1]} alt="" onClick={handleClick} />
          <img id="3" src={Avatars[2]} alt="" onClick={handleClick} />
          <img id="4" src={Avatars[3]} alt="" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
});
