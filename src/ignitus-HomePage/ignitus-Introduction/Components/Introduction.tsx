import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../../ignitus-Shared/Components/errorBoundary';
import * as t from '../constants';

const Introduction = () => (
  <div className="intro__wrapper">
    <img className="intro__torch" src={t.TORCH} alt="Ignitus Torch" />
    <h1 className="intro text-center">Welcome to Ignitus</h1>

    <div className="intro__content">
      <div className="intro__content--upper">
        Get handpicked top-quality global research
        {' '}
        <br />
        and industrial internships, for
        {' '}
        <span className="bold-txt">free</span>
        !
      </div>

      <div className="intro__content--lower">
        <div className="content--lower__signup">
          <p>
            Ignite your resume and get the
            {' '}
            <span className="bold-txt">
              best global
              {' '}
              <br />
              opportunities
            </span>
            {' '}
            and Skyrocketing your career
          </p>
          <Link to="/Signup">
            <button type="button" className="btn btn-secondary button-get-started">
              Sign Up
            </button>
          </Link>
        </div>
        <img className="img-fluid" src={t.RESUME} alt="resume" />
      </div>
    </div>

  </div>
);

export default withErrorBoundary(Introduction);
