import React, { Fragment } from 'react';
import Team from '../../ignitus-Team';
import CoreTeam from '../../ignitus-CoreTeam';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as t from '../constants';
import '../Styles/style.scss';

const About = () => (
  <Fragment>
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-row">
          <div className="about-img">
            <img
              className="mw-100 p-5"
              src={t.aboutImg}
              alt="aboutus"
            />
          </div>
          <div className="about-text-wrapper">
            <div className="title text-center mb-3">About Us</div>
            <div className="intro-text">
              {t.IgnitusIntro.map((x: any) => (
                <p key={x.title}>{x.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CoreTeam.components.CoreTeam />
      <Team.containers.TeamContainer />
    </div>
  </Fragment>
);

export default withErrorBoundary(About);
