import React, { Component } from 'react';
import {
  string, number, shape, func, arrayOf,
} from 'prop-types';
import shortid from 'shortid';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';


/*
const CarouselRightArrow = ({ onClick }) => (
  <a
    href="#"
    className="carousel__arrow carousel__arrow--right padding-on-right"
    onClick={onClick}
  >
    <i className="fa fa-2x fa-angle-right" />
  </a>
);*/

// Carousel wrapper component
class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  /*
  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.activeIndex !== this.state.activeIndex) {
      return true;
    }
    return false;
  }*/

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  getData() {
    this.props.getTestimonialData();
  }

  render() {
    const { testimonialData } = this.props;
    console.log('ddd ', testimonialData);
    return (
      <div className='testimonial'>
        <div className="testimonials-title title">Testimonials</div>
        <div className='testimonial-wrapper'>

          <div className='left-arrow arrow'>
            <i className="fa fa-arrow-left"></i>
          </div>
          <div className='carousel-content border'>
            <p className='testimonial-text'>In number theory, a semiperfect number or pseudoperfect number is a natural number n that is equal to the sum of all or some of its proper divisors</p>
            <p className='name'>Steven Kax</p>
            <p className='designation'>Front End Developer</p>
          </div>
          <div className='right-arrow arrow'>
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
    );
  }
}


Testimonial.propTypes = {
  getTestimonialData: func.isRequired,
  testimonialData: arrayOf(shape({
    content: string.isRequired,
    author: string.isRequired,
    source: string.isRequired,
  })).isRequired,
};

export default withErrorBoundary(Testimonial);
