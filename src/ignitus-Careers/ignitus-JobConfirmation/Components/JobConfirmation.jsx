/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import '../Styles/style.scss';

const JobConfirmation = () => (
  <div className="outer-container">
    <div className="outer-div-1">
      <div className="inner-div">
        <div className="job-heading">
          <h2 className="job-title">Product Design</h2>
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
              <div className="back-icon">
                <i className="fa fa-chevron-left" />
              </div>
              <p>Back to all jobs</p>
            </button>
          </div>
          <div className="job-details-outer">
            <div className="job-detailed-description">
              <div className="job-content">
                <h5>Where Your Expertise is needed</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="job-content">
                  <h5>What we are Looking for</h5>
                  <ul>
                    <li>
                      <p>Must have -</p>
                      <p>Description of skill set</p>
                    </li>
                    <li>
                      <p>Must have -</p>
                      <p>Description of skill set</p>
                    </li>
                    <li>
                      <p>Must have -</p>
                      <p>Description of skill set</p>
                    </li>
                  </ul>
                </div>
                <div className="job-content">
                  <h5>Perks of Work</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="job-content">
                  <h5>About Ignitus</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>We can&apos;t wait to meet you.</p>
                </div>
                <h4 className="note">
                  Please note that all the applications must be filled by form.
                </h4>
              </div>
            </div>
            <div className="job-joining-details">
              <div className="job-info">
                <div className="job-info-heading-container">
                  <h5 className="job-info-heading">Job Info</h5>
                </div>
                <div>
                  <h6>Location</h6>
                  <p>Pitsburg , New Jersy</p>
                </div>
                <div>
                  <h6>Contract</h6>
                  <p>Internship</p>
                </div>
                <div>
                  <h6>Job Category</h6>
                  <p>Designer</p>
                </div>
                <div>
                  <h6>Experience Level</h6>
                  <p>Beginner, Intermediate, Proficient</p>
                </div>
              </div>
              <div className="job-contact">
                <div className="job-info-heading-container">
                  <h5 className="job-info-heading">Contact</h5>
                </div>
                <div>
                  <h6>Recruiter</h6>
                  <p>Name</p>
                </div>
                <div>
                  <h6>Email</h6>
                  <p>abc@xyz.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-outer">
      <div className="card-body">
        <div className="card-content">
          <h3>Thank you for your application!</h3>
          <p>
            Its been great to see that you are interest in joining Ignitus.Your
            application has been received
          </p>
          <div className="card-links">
            <div>
              <div className="social-link fb">
                <i className="fa fa-facebook-f" />
              </div>
              <div className="social-link twitter">
                <i className="fa fa-twitter" />
              </div>
              <div className="social-link reddit">
                <i className="fa fa-reddit-alien" />
              </div>
              <div className="social-link linkedin">
                <i className="fa fa-linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withErrorBoundary(JobConfirmation);
