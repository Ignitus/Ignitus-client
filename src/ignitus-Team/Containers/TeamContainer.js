

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Team } from '../Components';
import { createStructuredSelector } from 'reselect';

import { getTeamData } from '../actions';
import { makeSelectTeamData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  teamData: makeSelectTeamData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ getTeamData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Team);
