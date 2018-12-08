

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Team } from '../Components';
import { createStructuredSelector } from 'reselect';

import { getContributorsData } from '../actions';
import { makeSelectContributorsData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  contributorsData: makeSelectContributorsData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ getContributorsData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Team);
