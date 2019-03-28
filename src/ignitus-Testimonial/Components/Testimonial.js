import React, { Component } from 'react';
import {
  string, number, shape, func, arrayOf,
} from 'prop-types';
import shortid from 'shortid';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';

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

const CarouselSlide = ({ activeIndex, slide, index }) => (
  <li
    className={
        index === activeIndex
          ? 'carousel__slide carousel__slide--active '
          : 'carousel__slide'
      }
  >
    <div className="carousel-slide__content">{slide.content}</div>

    <div className="author-source-container">
      <small className="carousel-slide__source">
        <div>
          <strong className="carousel-slide__author">{slide.author}</strong>
        </div>
        {slide.source}
      </small>
    </div>
  </li>
);

// consider refactoring to use button

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

  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.timer, 1700);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.activeIndex !== this.state.activeIndex) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    this.props.getTestimonialData();
  }

  timer() {
    const { testimonialData: data } = this.props;

    if (data) {
      if (this.state.activeIndex === data.length - 1) {
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

    const { activeIndex } = this.state;
    const { testimonialData } = this.props;

    if (activeIndex < 1) {
      return this.setState(() => ({
        activeIndex: testimonialData.length - 1,
      }));
    }

    return this.setState(prevState => ({
      activeIndex: prevState.activeIndex - 1,
    }));
  }

  goToNextSlide(e) {
    e.preventDefault();

    const { activeIndex } = this.state;
    const { testimonialData } = this.props;

    if (activeIndex === (testimonialData.length - 1)) {
      return this.setState({ activeIndex: 0 });
    }

    return this.setState(prevState => ({
      activeIndex: prevState.activeIndex + 1,
    }));
  }

  render() {
    const { activeIndex } = this.state;
    const { goToPrevSlide, goToNextSlide } = this;

    return (
      <div>
        <div className="testimonials title">Testimonials</div>

        <div className="carousel">
          <div>
            <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />
          </div>
          <div className="purple__tile">
            <div className="carousel--tile">
              <ul className="carousel__slides container">
                {this.props.testimonialData.length > 0
                  ? this.props.testimonialData.map((slide, index) => (
                    <CarouselSlide
                      key={shortid.generate()}
                      index={index}
                      activeIndex={activeIndex}
                      slide={slide}
                    />
                  ))
                  : null}
              </ul>
            </div>
          </div>
          <div className="arrow-fix">
            <CarouselRightArrow onClick={e => goToNextSlide(e)} />
          </div>
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

Testimonial.propTypes = {
  getTestimonialData: func.isRequired,
  testimonialData: arrayOf(shape({
    content: string.isRequired,
    author: string.isRequired,
    source: string.isRequired,
  })).isRequired,
};

export default withErrorBoundary(Testimonial);
