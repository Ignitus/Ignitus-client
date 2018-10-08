import React, { Component } from 'react';
import {
  string, number, shape, func, array,
} from 'prop-types';
import '../Styles/style.css';
import axios from 'axios';
import { API_URL } from '../constants';


const CarouselIndicator = ({ index, activeIndex, onClick }) => (
  <li>
    <a
      className={
        index === activeIndex
          ? 'carousel__indicator carousel__indicator--active'
          : 'carousel__indicator'
      }
      onClick={onClick}
    />
  </li>
);

const CarouselSlide = ({ index, activeIndex, slide }) => (
  <li
    className={
      index === activeIndex
        ? "carousel__slide carousel__slide--active "
        : "carousel__slide"
    }
  >
    <div className="carousel-slide__content">{slide.content}</div>

    <div className="author-source-container">
      <small className="carousel-slide__source">
        <div>
          <strong className="carousel-slide__author">
            {slide.author}
          </strong>
        </div>
        {slide.source}
      </small>
    </div>
  </li>
);


const CarouselLeftArrow = ({ onClick }) => (
  <a
    href="#"
    className="carousel__arrow carousel__arrow--left padding-on-left"
    onClick={onClick}
  >
    <i className="fa fa-2x fa-angle-left" />
  </a>
);

const CarouselRightArrow = ({ onClick }) => (
  <a
    href="#"
    className="carousel__arrow carousel__arrow--right padding-on-right"
    onClick={onClick}
  >
    <i className="fa fa-2x fa-angle-right" />
  </a>
);
// Carousel wrapper component
class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.timer = this.timer.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  componentWillMount() {
    this.getData();
  }


  getData() {
    this.props.get_testimonial_data();
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.timer, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.activeIndex !== this.state.activeIndex) {
      return true;
    }
    return false;
  }

  timer() {
    // const {data} = this.props.state.TestimonialReducer[0];
    if (this.props.state.TestimonialReducer[0]) {
      if (this.state.activeIndex === this.props.state.TestimonialReducer[0].data.length - 1) {
        this.setState({ activeIndex: -1 });
      }

      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: -1 });
    }
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    const slides = this.props.state.TestimonialReducer[0].data;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    const slides = this.props.state.TestimonialReducer[0].data;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { activeIndex } = this.state;
    const { goToPrevSlide, goToSlide, goToNextSlide } = this;


    return (
      <div className="carousel">
        <div>
          <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />
        </div>
        <div>
          <ul className="carousel__slides container">
            {this.props.state.TestimonialReducer[0]
              ? this.props.state.TestimonialReducer[0].data.map((slide, index) => (
                <CarouselSlide
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  slide={slide}
                />
              )) : null}
          </ul>
          <ul className="carousel__indicators">
            {this.props.state.TestimonialReducer[0]
              ? this.props.state.TestimonialReducer[0].data.map((slide, index) => (
                <CarouselIndicator
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  isActive={activeIndex === index}
                  onClick={e => goToSlide(index)}
                />
              )) : null}
          </ul>
        </div>
        <div className="arrow-fix">
          <CarouselRightArrow onClick={e => goToNextSlide(e)} />
        </div>
      </div>
    );
  }
}


CarouselIndicator.propTypes = {
  index: number.isRequired,
  activeIndex: number.isRequired,
  onClick: func.isRequired,
};

CarouselSlide.propTypes = {
  index: number.isRequired,
  activeIndex: number.isRequired,
  slide: shape({
    content: string,
    author: string,
    source: string,
  }).isRequired,
};

CarouselLeftArrow.propTypes = {
  onClick: func.isRequired,
};

CarouselRightArrow.propTypes = {
  onClick: func.isRequired,
};


export default Testimonial;
