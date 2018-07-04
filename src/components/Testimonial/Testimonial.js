import React, { Component } from 'react';
import './testimonial.css';


const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook"
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  }, {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  }, {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  }, {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  }, {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}/>
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }>
        <p className="carousel-slide__content">{this.props.slide.content}</p>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.author}
          </strong>,
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.source}
          </small>
        </p>
      </li>
    );
  }
}

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}>
        <i className="fa fa-2x fa-angle-left"> </i>
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}>
        <i className="fa fa-2x fa-angle-right"> </i>
      </a>
    );
  }
}

// Carousel wrapper component
class Testimonial extends Component {

	constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
    console.log("egrtgrtgt "+this.props);
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
    console.log("qqqqqqqqqq "+this.props.index);
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
    console.log("wwwwwwwww "+this.props.index);
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
    console.log("ttttttttttt "+this.props.index);

  }


  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}/>
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={e => this.goToSlide(index)}/>
          )}
        </ul>
      </div>
    );
  }
  
}

export default Testimonial;


