import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as t from './Constants';

const Partner = () => {
  const array = [
    t.WOOTECH,
    t.SUGARLABS,
    t.SYSTERS,
    t.PROGATE,
    t.LEANIN,
    t.GIRLSCRIPT,
  ];
  const html = array.map(logo => (
    <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={logo}>
      <div className="card mt-4 shadow contributor-card">
        <div className="card-img-top logoCss centered-image d-flex align-middle">
          <img
            src={logo}
            alt="logo"
            className={/lean/g.test(logo) ? 'leanIn' : ''}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div id="partners">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 text-center mt-4">
        <div className="partners">Supporters & Partners</div>
        <div className="studentsResearchers">
          Supported with
          {' '}
          <i className="fa fa-heart heart" />
          {' '}
by following
          Organizations ...
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center card_row">{html}</div>
      </div>
    </div>
  );
};

export default withErrorBoundary(Partner);
