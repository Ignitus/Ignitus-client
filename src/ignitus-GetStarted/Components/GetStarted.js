import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';


const GetStarted = () => (
  <div className="text-center container">
    <div className="started">
      Get started for free - join thousands of students and researchers already
      using Ignitus to share their knowledge, work together, and get amazing
      opportunites.
    </div>
      <button className="btn btn-secondary" type="button">
        Sign-Up
  </button>
  </div>
);

export default withErrorBoundary(GetStarted);
