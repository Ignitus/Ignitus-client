import React, { Fragment } from 'react';
import '../Styles/style.scss';

import Team from '../../ignitus-Team';
import CoreTeam from '../../ignitus-CoreTeam';

import * as t from '../constants';
import { withErrorBoundary } from '../../ignitus-Internals';

const About = () => (
  <Fragment>
    <div className="about-wrapper pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <img
              className="mw-100 p-5"
              src={t.aboutImg}
              alt="aboutus"
            />
          </div>
          <div className="col-md about bg-white p-4">
            <div className="title text-center mb-3">About Us</div>
            <div className="intro-text">
              {t.IgnitusIntro.map(x => (
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
