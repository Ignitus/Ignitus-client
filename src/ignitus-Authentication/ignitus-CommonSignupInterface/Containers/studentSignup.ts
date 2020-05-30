import { connect } from 'react-redux';

import { Signup as StudentSignUp } from '../../ignitus-StudentSignUpFlow/ignitus-StudentSignUp/Components';

import { mapStateToProps, mapDispatchToProps } from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentSignUp);
