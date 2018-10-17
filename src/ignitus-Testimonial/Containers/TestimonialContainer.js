

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Testimonial } from '../Components';
import { createStructuredSelector } from 'reselect';

import { getTestimonialData } from '../actions';
import { makeSelectTestimonialData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  testimonialData: makeSelectTestimonialData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ getTestimonialData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
