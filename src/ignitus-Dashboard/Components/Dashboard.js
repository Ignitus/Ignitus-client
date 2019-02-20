import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';

const Dashboard = () => (
  <div>
    <div className="container marginTop">
      <h4>
        Welcome to Ignitus
        <span aria-label="hello" role="img">👋</span>
      </h4>
      <p>
        Website Under Maintenance !!
        <span aria-label="rocket" role="img">
          🚀
        </span>
      </p>
    </div>
  </div>
);

export default withErrorBoundary(Dashboard);
