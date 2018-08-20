import React, { Component } from 'react';
import './testimonial.css';


class CarouselIndicator extends Component {
    render() {
        return (
            <li>
                <a
                    className={
                        this.props.index === this.props.activeIndex
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
                    this.props.index === this.props.activeIndex
                        ? "carousel__slide carousel__slide--active "
                        : "carousel__slide"
                }>

                <div className="carousel-slide__content">{this.props.slide.content}</div>

                <div className = "author-source-container">
                    <small className="carousel-slide__source">
                        <div>
                            <strong className="carousel-slide__author">
                                {this.props.slide.author}
                            </strong>
                        </div>
                        {this.props.slide.source}
                    </small>
                </div>
            </li>
        );
    }
}

class CarouselLeftArrow extends Component {
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--left padding-on-left"
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
                className="carousel__arrow carousel__arrow--right padding-on-right"
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

        this.goToSlide     = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.timer         = this.timer.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    componentDidMount(){
        let interval = setInterval(this.timer, 4000);
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.interval);
    }

    timer() {
        // setState method is used to update the state
        if(this.state.activeIndex  === this.props.slides.length - 1){
            this.setState({ activeIndex: -1 });
        }

        this.setState({ activeIndex: this.state.activeIndex + 1 });
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
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
    }


    render() {

        return (
            <div className="carousel">
                <div>
                    <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
                </div>
                <div>
                    <ul className="carousel__slides container" >
                        {this.props.slides.map((slide, index) =>
                            <CarouselSlide
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                slide={slide}/>
                        )}
                    </ul>
                    <ul className="carousel__indicators">
                        {this.props.slides.map((slide, index) =>
                            <CarouselIndicator
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                isActive={this.state.activeIndex===index}
                                onClick={e => this.goToSlide(index)}/>
                        )}
                    </ul>
                </div>
                <div className = "arrow-fix">
                    <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
                </div>
            </div>
        );
    }

}

export default Testimonial;