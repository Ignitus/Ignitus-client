import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { Login } from '../Components';
import { logInRequest } from '../actions';

import { makeSelectProfessorData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  professorLoginData: makeSelectProfessorData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ logInRequest }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
