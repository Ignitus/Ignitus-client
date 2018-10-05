

import Testimonial from '../Components/Testimonial';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_testimonial_data } from '../actions';

const mapStateToProps = (state) => {
	return { state : state}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ set_testimonial_data }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);