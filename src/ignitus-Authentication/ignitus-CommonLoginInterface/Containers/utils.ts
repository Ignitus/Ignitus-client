import {bindActionCreators} from 'redux';

import {createStructuredSelector} from 'reselect';
import {logInRequest, clearPreviousLogin} from '../actions';

import {makeSelectData} from '../selectors';

export const mapStateToProps = createStructuredSelector({
  logInData: makeSelectData(),
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({logInRequest, clearPreviousLogin}, dispatch);
