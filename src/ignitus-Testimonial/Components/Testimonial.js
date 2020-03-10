
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import {
  string, shape, func, arrayOf,
} from 'prop-types';
import { withErrorBoundary } from '../../ignitus-Shared/Components/ErrorBoundary';

import '../Styles/style.scss';

const Testimonial = ({ testimonialData, getTestimonialData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((previous) => {
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
        <div className="left-arrow arrow" onClick={prevTestimonial}>
          <i className="fa fa-arrow-left" />
        </div>
        {testimonialData.length > 0 && (
          <div className="carousel-content">
            <p className="testimonial-text">
              {testimonialData[currentIndex].content}
            </p>
            <p className="name">
              {testimonialData[currentIndex].author}
            </p>
            <p className="designation">
              {testimonialData[currentIndex].source}
            </p>
          </div>
        )}
        <div className="right-arrow arrow" onClick={nextTestimonial}>
          <i className="fa fa-arrow-right" />
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  getTestimonialData: func.isRequired,
  testimonialData: arrayOf(
    shape({
      content: string.isRequired,
      author: string.isRequired,
      source: string.isRequired,
    }),
  ).isRequired,
};

export default withErrorBoundary(Testimonial);
