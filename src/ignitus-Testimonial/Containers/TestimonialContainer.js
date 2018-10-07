

import Testimonial from '../Components/Testimonial';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get_testimonial_data } from '../actions';

const mapStateToProps = (state) => {
	return { state}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ get_testimonial_data }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);