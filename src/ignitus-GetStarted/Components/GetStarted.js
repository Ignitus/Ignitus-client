import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';


const GetStarted = () => (
  <div className="align container">
    <div className="started">
      Get started for free - join thousands of students and researchers already
      using Ignitus to share their knowledge, work together, and get amazing
      opportunites.
    </div>
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sign-Up
  </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="/signup/student">
          <span className="dropdown-item">Student</span>
        </Link>
        <Link to="/signup/professor">
          <span className="dropdown-item">Professor</span>
        </Link>
      </div>
    </div>
  </div>
);

export default withErrorBoundary(GetStarted);
