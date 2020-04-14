import {connect} from 'react-redux';

import StudentLogin from '../../ignitus-StudentLogin/Components';
import {
  mapDispatchToProps,
  mapStateToProps
} from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentLogin);
