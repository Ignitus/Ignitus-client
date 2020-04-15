import {bindActionCreators} from 'redux';

import {createStructuredSelector} from 'reselect';
import {signUpRequest, clearPreviousSignUp} from '../actions';

import {makeSelectData} from '../selectors';

export const mapStateToProps = createStructuredSelector({
  signUpData: makeSelectData(),
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({signUpRequest, clearPreviousSignUp}, dispatch);
