import React, {FunctionComponent} from 'react';
import {WebsiteUnderConstruction} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {Container} from '../styles';

const Dashboard: FunctionComponent = withErrorBoundary(() => (
  <Container>
    <WebsiteUnderConstruction />
  </Container>
));

export default Dashboard;
