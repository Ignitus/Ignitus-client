/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
  string, shape, func, arrayOf,
} from 'prop-types';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';

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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getTestimonialData();
    this.interval = setInterval(this.nextTestimonial, 2000);
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
  }


  render() {
    const { testimonialData } = this.props;
    return (
      <div className="testimonial">
        <div className="testimonials-title title">Testimonials</div>
        <div className="testimonial-wrapper">
          <div className="left-arrow arrow" onClick={this.prevTestimonial}>
            <i className="fa fa-arrow-left" />
          </div>
          {this.props.testimonialData.length > 0 && (
            <div className="carousel-content">
              <p className="testimonial-text">{testimonialData[this.state.currentIndex].content}</p>
              <p className="name">{testimonialData[this.state.currentIndex].author}</p>
              <p className="designation">{testimonialData[this.state.currentIndex].source}</p>
            </div>
          )}
          <div className="right-arrow arrow" onClick={this.nextTestimonial}>
            <i className="fa fa-arrow-right" />
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
