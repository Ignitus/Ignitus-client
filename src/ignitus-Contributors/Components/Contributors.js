import React from 'react';
import '../Styles/style.scss';
import * as t from './Constants';

import { withErrorBoundary } from '../../ignitus-Internals';

const Contributors = () => {
  const array = [t.UCB, t.STANFORD, t.CMU, t.HARVARD, t.MIT, t.OXFORD, t.PRINCETON, t.YALE];
  const html = array.map(logo => (
    <div
      className="col-lg-4 col-md-4 col-sm-6 col-12"
      key={logo}
    >
      <div className="card mt-4 shadow contributor-card">
        <div className="card-img-top logoCss centered-image d-flex align-middle">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  ));

  return (
    <section id="contributors">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 text-center mt-4">
        <div className="contributor">Contributors</div>
        <div className="studentsResearchers">
          Made with
          {' '}
          <i className="fa fa-heart heart" />
          {' '}
          by Students,
          Researchers and Alumni of ...
        </div>
      </div>

      <div className="container">
        <div className="row card_row">{html}</div>
      </div>
    </section>
  );
};

export default withErrorBoundary(Contributors);
