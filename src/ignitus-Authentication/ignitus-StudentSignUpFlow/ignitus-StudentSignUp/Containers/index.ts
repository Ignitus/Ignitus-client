import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {createStructuredSelector} from 'reselect';
import {signUpRequest, clearPreviousSignUp} from '../actions';

import {makeSelectStudentData} from '../selectors';
import {default as Signup} from '../Components';

const mapStateToProps = createStructuredSelector({
  studentSignUpData: makeSelectStudentData(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({signUpRequest, clearPreviousSignUp}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
