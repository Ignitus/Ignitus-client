/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState, useEffect} from 'react';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';
import i1 from '../images/i1.png';
import i2 from '../images/i2.png';
import i3 from '../images/i3.png';
import i4 from '../images/i4.png';

const Testimonial = ({testimonialData, getTestimonialData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(previous => {
      if (previous === testimonialData.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  const prevTestimonial = () => {
    let nextIndex = currentIndex - 1;
    if (currentIndex === 0) {
      nextIndex = testimonialData.length - 1;
    }
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="testimonial">
      <div className="testimonials-title title">Testimonials</div>
      <div className="testimonial-wrapper">
        {testimonialData.length > 0 && (
          <div className="carousel-content">
            <blockquote className="text">
              <p>{testimonialData[currentIndex].description}</p>
            </blockquote>
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
          <img src={i1} onClick={nextTestimonial} />
          <img src={i2} />
          <img src={i3} />
          <img src={i4} onClick={prevTestimonial} />
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(Testimonial);
