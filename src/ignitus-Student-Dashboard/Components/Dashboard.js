/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';

const Dashboard = () => (
  <div className="container marginTop dashboard-container">
    <div className="left-section">
      Hello 👋
    </div>
  </div>
);

export default withErrorBoundary(Dashboard);
