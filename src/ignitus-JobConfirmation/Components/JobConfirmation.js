/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss'
class JobConfirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="outer-container">

        <div className="outer-div-1">
          <div className="inner-div">
            <div className="job-heading">
              <h2 className="job-title">
                Product Design
          </h2>
              <div className="job-btn">
                <button type="button">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-div-2">
          <div className="inner-div">
            <div className="job-description">
              <div className="all-job">
                <button type="button">
                  <div className="back-icon"><i className="fa fa-chevron-left"></i></div>
                  <p>Back to all jobs</p>
                </button>
              </div>
              <div className="job-details-outer">
                <div className="job-detailed-description">
                  <div className="job-content">
                    <h5>
                      Where Your Expertise is needed
                  </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                    <div className="job-content">
                      <h5>
                        What we are Looking for
                  </h5>
                      <ul>
                        <li>
                          <h6>Must have -</h6>
                          <p>Description of skill set</p>
                        </li>
                        <li>
                          <h6>Must have -</h6>
                          <p>Description of skill set</p>
                        </li>
                        <li>
                          <h6>Must have -</h6>
                          <p>Description of skill set</p>
                        </li>
                      </ul>
                    </div>
                    <div className="job-content">
                      <h5 >
                        Perks of Work
                  </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                    <div className="job-content">
                      <h5 >
                        About Ignitus
                  </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>

                  </div>
                </div>
                <div className="job-joining-details">
                  <div className="job-info">
                    <h5 className="job-info-heading">
                      Job Info
                    </h5>
                    <div>
                      <h5>
                        Location
                  </h5>
                      <p>
                        Pitsburg , New Jersy
                  </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(JobConfirmation);
