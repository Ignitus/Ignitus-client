import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';
import torch from '../../ignitus-Assets/Images/torch.svg';

import resume from '../../ignitus-Assets/Images/Resume.svg';

const Introduction = () => (
  <div className="intro__wrapper" >
      <img className="intro__torch" src={torch} alt="Ignitus Torch" />
      <h1 className="intro text-center">Welcome to Ignitus</h1>

      <div className="intro__content">
        <div className="intro__content--upper">
          Get handpicked top-quality global research <br />
          and industrial internships, for <span className="bold-txt">free</span>!
        </div>

        <div className="intro__content--lower">
          <div className="content--lower__signup">
            <p>Ingnite your resume and get the <span className="bold-txt">best global <br />
                opportunities</span> and skyrocekt your career</p>
            <Link to="/Signup">
              <button className="btn btn-secondary button-get-started">
                Sign Up
              </button>
            </Link>
          </div>
          <img className="img-fluid" src={resume} alt="resume" />
        </div>
      </div>

  </div>
);
export default withErrorBoundary(Introduction);
