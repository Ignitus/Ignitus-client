

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Signup } from '../Components';
import { submit } from '../actions';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ submit }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
