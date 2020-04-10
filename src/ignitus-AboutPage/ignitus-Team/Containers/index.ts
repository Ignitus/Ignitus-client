import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getContributorsData } from '../actions';
import { makeSelectContributorsData } from '../selectors';
import { Team } from '../Components';

const mapStateToProps = createStructuredSelector({
  contributorsData: makeSelectContributorsData(),
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getContributorsData }, dispatch);
export const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(Team);