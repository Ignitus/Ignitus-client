

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Signup } from '../Components';
import { requestApi } from '../actions';

import { createStructuredSelector } from 'reselect';
import { makeSelectStudentData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  studentData: makeSelectStudentData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestApi }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

