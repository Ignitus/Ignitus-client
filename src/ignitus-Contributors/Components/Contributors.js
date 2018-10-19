import React from 'react';
import '../Styles/style.scss';
import * as t from './Constants';

const Contributors = () => {
  const array = [t.UCB, t.STANFORD, t.CMU, t.HARVARD, t.MIT, t.OXFORD, t.PRINCETON, t.YALE];
  const html = array.map((logo, key) => (
    <div
      className="col-lg-3 col-md-4 col-sm-6 col-12 logoCss centered-image"
      key={key}
    >
      <img src={logo} width="200" alt="logo" />
    </div>
  ));

  return (
    <section id="contributors">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 align mt-4">
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
        <div className="row">{html}</div>
      </div>
    </section>
  );
};

export default Contributors;
