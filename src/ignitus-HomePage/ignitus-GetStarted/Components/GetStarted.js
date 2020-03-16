import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

const GetStarted = () => (
  <div className="started--container">
    <div className="started">
      Get started for free - join thousands of students and researchers already
      using Ignitus to share their knowledge, work together, and get amazing
      opportunites.
    </div>
    <Link to="/Signup">
      <button className="btn btn-secondary button-get-started" type="button">
        Sign-Up
      </button>
    </Link>
  </div>
);

export default withErrorBoundary(GetStarted);
