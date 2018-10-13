import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setTestimonialData from '../actions';
import Testimonial from '../../ignitus-Testimonial/Components/Testimonial';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ setTestimonialData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
