import { connect } from 'react-redux';

import { Login as StudentLogin } from '../../ignitus-StudentLogin/Components';
import { mapDispatchToProps, mapStateToProps } from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentLogin);
