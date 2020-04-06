import React, { FunctionComponent } from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { WebsiteUnderConstruction } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components';

const Dashboard: FunctionComponent = () => (
  <div className="container marginTop dashboard-container">
    <div className="left-section">
      <WebsiteUnderConstruction />
    </div>
  </div>
);

export default withErrorBoundary(Dashboard);
