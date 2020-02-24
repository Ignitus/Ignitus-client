import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';
import { Data } from '../constants';
import { PureContributors } from '../../ignitus-Contributors/Components/Contributors';

const Partner = () => (
  <PureContributors data={Data} type="Partners" paragraph="by following Organizations..." />
);

export default withErrorBoundary(Partner);
