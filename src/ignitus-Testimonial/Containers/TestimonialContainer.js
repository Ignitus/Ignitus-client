

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Testimonial } from '../Components';
import { createStructuredSelector } from 'reselect';

import { get_testimonial_data } from '../actions';
import { makeSelectTestimonialData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  testimonialData: makeSelectTestimonialData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ get_testimonial_data }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
