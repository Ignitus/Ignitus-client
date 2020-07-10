import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import {
  logInRequestUsingEmail,
  logInRequestUsingUsername,
  clearPreviousLogin,
} from '../actions';

import { makeSelectData } from '../selectors';

export const mapStateToProps = createStructuredSelector({
  logInData: makeSelectData(),
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { logInRequestUsingEmail, logInRequestUsingUsername, clearPreviousLogin },
    dispatch,
  );
