import {connect} from 'react-redux';

import PLogin from '../../ignitus-ProfessorLogin/Components';
import {
  mapDispatchToProps,
  mapStateToProps
} from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PLogin);
