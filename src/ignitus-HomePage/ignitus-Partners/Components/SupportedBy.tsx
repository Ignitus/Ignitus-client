/* eslint-disable import/no-unresolved */
import React from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { Data } from '../constants';
import { PureContributors } from '../../ignitus-Contributors/Components/Contributors';

const SupportedBy: React.FunctionComponent = () => (
  <PureContributors data={Data} type="Supported By" paragraph="by following Organizations..." />
);

export default withErrorBoundary(SupportedBy);
