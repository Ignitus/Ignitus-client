import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../internals';


const GetStarted = () => (
  <div className="align container">
    <div className="started">
      Get started for free - join thousands of students and researchers already
      using Ignitus to share their knowledge, work together, and get amazing
      opportunites.
    </div>
    <a href="/signup" className="btn btn-md button-get-started" role="button">
      Sign Up
    </a>
  </div>
);

export default withErrorBoundary(GetStarted);
