import React from 'react';
import '../Styles/style.scss';
import { Data } from './Constants';

import { withErrorBoundary } from '../../ignitus-Internals';

const Contributors = () => (
  <section>
    <div className="contributors">
      <section className="contributors-top-section">
        <div className="contributor">Contributors</div>
        <div className="studentsResearchers">
          Made with
          <i className="fa fa-heart heart" />
          by Students, Researchers and Alumni of ...
        </div>
      </section>
      <section className="contributors-bottom-section">
        <div className="contributors-bottom-section-row">
          {Data.map(logo => (
            <div className="contributors-card">
              <img src={logo} alt="logo"/>
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
);

export default withErrorBoundary(Contributors);
