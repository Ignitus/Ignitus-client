/* eslint-disable react/prop-types */
import React from 'react';
import '../Styles/style.scss';
import { Data } from './Constants';

import { withErrorBoundary } from '../../ignitus-Internals';

export const PureContributors = ({ data, type, paragraph }) => (
  <section>
    <div className="contributors">
      <section className="contributors-top-section">
        <div className="contributor">{ type }</div>
        <div className="studentsResearchers">
          Supported with
          &nbsp;
          {' '}
          <i className="fa fa-heart heart" />
          {' '}
          &nbsp;
          { paragraph }
        </div>
      </section>
      <section className="contributors-bottom-section">
        <div className="contributors-bottom-section-row">
          {data.map(logo => (
            <div className="contributors-card" key={logo}>
              <img src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
);

const Contributors = () => (
  <PureContributors data={Data} type="Contributors" paragraph="by Students, Researchers and Alumni of ..." />
);

export default withErrorBoundary(Contributors);
