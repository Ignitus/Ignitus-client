import React, {FunctionComponent} from 'react';
import {WebsiteUnderConstruction, withErrorBoundary} from '../../../ignitus-Shared';
import {Container} from '../styles';

const Dashboard: FunctionComponent = withErrorBoundary(() => (
  <Container>
    <WebsiteUnderConstruction />
  </Container>
));

export default Dashboard;
