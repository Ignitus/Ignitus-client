/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../Styles/style.scss';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {WebsiteUnderConstruction} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components';

const Dashboard = () => (
  <div className="container marginTop dashboard-container">
    <div className="left-section">
      <WebsiteUnderConstruction />
    </div>
  </div>
);

export default withErrorBoundary(Dashboard);
