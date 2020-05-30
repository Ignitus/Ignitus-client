import { connect } from 'react-redux';

import { Login as ProfessorLogin } from '../../ignitus-ProfessorLogin/Components';
import { mapDispatchToProps, mapStateToProps } from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfessorLogin);
