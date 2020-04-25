import { connect } from 'react-redux';

import { default as ProfessorSignUp } from '../../ignitus-ProfessorSignUp/Components';

import { mapStateToProps, mapDispatchToProps } from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfessorSignUp);
