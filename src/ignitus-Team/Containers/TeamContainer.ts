import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Team } from '../Components';

import { getContributorsData } from '../actions';
import { makeSelectContributorsData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  contributorsData: makeSelectContributorsData(),
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getContributorsData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Team);
