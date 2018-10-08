

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Testimonial } from '../Components';
import { get_testimonial_data } from '../actions';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ get_testimonial_data }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
