import React, {useState, useEffect} from 'react';
import * as T from '../style';

import { Avatars } from '../constants';
import { Props } from '../types';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

export const Testimonial: React.FC<Props> = withErrorBoundary(
  ({testimonialData, getTestimonialData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = event => {
      const {
        target: {id},
      } = event;

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <img data-src={Avatars[currentIndex]} className="lazyload" alt={''}/>
              </T.Avatar>
              <T.Name>{testimonialData[currentIndex].author}</T.Name>
              <T.Designation>
                {testimonialData[currentIndex].authorDesignation}
              </T.Designation>
            </T.Carousel>
          )}
          <T.Navigation>
            <img id="1" className="lazyload" data-src={Avatars[0]} alt="" onClick={handleClick} />
            <img id="2" className="lazyload" data-src={Avatars[1]} alt="" onClick={handleClick} />
            <img id="3" className="lazyload" data-src={Avatars[2]} alt="" onClick={handleClick} />
            <img id="4" className="lazyload" data-src={Avatars[3]} alt="" onClick={handleClick} />
          </T.Navigation>
        </T.Testimonial>
      </T.Container>
    );
  },
);
