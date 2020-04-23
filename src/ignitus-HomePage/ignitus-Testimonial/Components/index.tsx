import React, {useState, useEffect} from 'react';
import * as T from '../style';

import {Avatars} from '../constants';
import {Props} from '../types';
import {withErrorBoundary} from '../../../ignitus-Shared';

export const Testimonial: React.FC<Props> = withErrorBoundary(
  ({testimonialData, getTestimonialData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      getTestimonialData();
    }, [getTestimonialData]);

    return (
      <T.Container>
        <T.Title>Testimonials</T.Title>
        <T.Testimonial>
          {testimonialData.length > 0 && (
            <T.Carousel>
              <T.Text>
                <p>{testimonialData[currentIndex].description}</p>
              </T.Text>
              <T.Avatar>
                <img src={Avatars[currentIndex]} alt={''} />
              </T.Avatar>
              <T.Name>{testimonialData[currentIndex].author}</T.Name>
              <T.Designation>
                {testimonialData[currentIndex].authorDesignation}
              </T.Designation>
            </T.Carousel>
          )}
          <T.Navigation>
            {testimonialData.length > 0 &&
              testimonialData.map((_, index) => (
                <img
                  key={_._id}
                  src={Avatars[index]}
                  alt=""
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
          </T.Navigation>
        </T.Testimonial>
      </T.Container>
    );
  },
);
