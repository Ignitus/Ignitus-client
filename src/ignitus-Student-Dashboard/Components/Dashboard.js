
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../shared/Components/ErrorBoundary';

const Dashboard = () => {
  let email = '';
  if (localStorage.getItem('data')) {
    ({ email } = JSON.parse(localStorage.getItem('data')));
  }
  return (
    <div className="container marginTop dashboard-container">
      <div className="left-section">
        Hello
        {' '}
        {email}
        👋
      </div>
    </div>
  );
};

export default withErrorBoundary(Dashboard);
