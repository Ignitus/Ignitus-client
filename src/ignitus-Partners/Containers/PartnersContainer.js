

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Partner } from '../Components';
import { set_testimonial_data } from '../actions';

// ignitus-Testimonial Containers BoilerPlate
const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ set_testimonial_data }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Partner);
