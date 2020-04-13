import {connect} from 'react-redux';

import SLogin from '../../ignitus-StudentLogin/Components';
import {
  mapDispatchToProps,
  mapStateToProps
} from './utils';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SLogin);
