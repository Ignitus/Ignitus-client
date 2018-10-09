import React, { Component } from 'react';
import '../Styles/style.css';

import wooTech from '../../Assets/Images/Partners Logos/wooTech.png';
import sugarLabs from '../../Assets/Images/Partners Logos/sugarLabs.png';
import systersLogo from '../../Assets/Images/Partners Logos/systers-logo.png';
import girlScript from '../../Assets/Images/Partners Logos/gslogo.png';
import leanIn from '../../Assets/Images/Partners Logos/lean_in.png';
import progate from '../../Assets/Images/Partners Logos/progate.jpg';

class Partner extends Component {
  render() {
    const imagesArray = [
      wooTech,
      sugarLabs,
      girlScript,
      leanIn,
      systersLogo,
      progate,
    ];

    const html = imagesArray.map((logo, key) => (
      <div
        className="col-lg-4 col-md-4 col-sm-6 col-12 _logo_css centered-image"
        key={key}
      >
        <img src={logo} width="200" alt="logo" />
      </div>
    ));

    return (
      <div id="partners">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
          <div className="_contributor">Supporters & Partners</div>
          <div className="_students_researchers">
            Supported with
            {' '}
            <i className="fa fa-heart _heart" />
            {' '}
by following
            Organizations ...
          </div>
        </div>

        <div className="container">
          <div className="row _align-vertically">{html}</div>
        </div>
      </div>
    );
  }
}

export default Partner;
