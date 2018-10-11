import React, { Component } from 'react';
import '../Styles/style.css';
import * as t from './Constants';

const Partner = () => {
const array = [ t.WOOTECH, t.SUGARLABS, t.SYSTERS, t.PROGATE, t.LEANIN, t.GIRLSCRIPT];
const html = array.map((logo, key) => (
    <div
      className="col-lg-4 col-md-4 col-sm-6 col-12 logoCss centered-image"
      key={key}
    >
      <img src={logo} width="200" alt="logo" />
    </div>
  ));

  return (
    <div id="partners">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 align mt-4">
        <div className="contributor">Supporters & Partners</div>
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
        <div className="row align-vertically">{html}</div>
      </div>
    </div>
  );
};

export default Partner;
