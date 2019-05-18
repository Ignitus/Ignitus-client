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
      currentIndex: 0,
    };

    this.getData = this.getData.bind(this);
    this.nextTestimonial = this.nextTestimonial.bind(this);
    this.prevTestimonial = this.prevTestimonial.bind(this);
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

  nextTestimonial() {
    const { currentIndex } = this.state;
    const { testimonialData } = this.props;
    let nextIndex = currentIndex + 1;
    if (currentIndex === testimonialData.length - 1) {
      nextIndex = 0;
    }
    this.setState({
      currentIndex: nextIndex,
    });
  }

  prevTestimonial() {
    const { currentIndex } = this.state;
    const { testimonialData } = this.props;
    let nextIndex = currentIndex - 1;
    if (currentIndex === 0) {
      nextIndex = testimonialData.length - 1;
    }

    this.setState({
      currentIndex: nextIndex,
    });
  };


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

          <div className='left-arrow arrow' onClick={this.prevTestimonial}>
            <i className="fa fa-arrow-left"></i>
          </div>
          {this.props.testimonialData.length > 0 && <div className='carousel-content'>
            <p className='testimonial-text'>{testimonialData[this.state.currentIndex].content}</p>
            <p className='name'>{testimonialData[this.state.currentIndex].author}</p>
            <p className='designation'>{testimonialData[this.state.currentIndex].source}</p>
          </div>}
          <div className='right-arrow arrow' onClick={this.nextTestimonial}>
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
