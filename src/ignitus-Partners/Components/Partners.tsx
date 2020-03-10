/* eslint-disable import/no-unresolved */
import React from 'react';
import { withErrorBoundary } from '../../shared/Components/ErrorBoundary';
import { Data } from '../constants';
import { PureContributors } from '../../ignitus-Contributors/Components/Contributors';

const Partner = () => (
  <PureContributors data={Data} type="Partners" paragraph="by following Organizations..." />
);

export default withErrorBoundary(Partner);
