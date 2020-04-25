import { connect } from 'react-redux';

import ProfessorLogin from '../../ignitus-ProfessorLogin/Components';
import { mapDispatchToProps, mapStateToProps } from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfessorLogin);
