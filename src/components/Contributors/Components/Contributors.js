import React, { Component } from 'react';
import '../Styles/style.css';
import stanfordLogo from '../../../Images/University Logos/Stanford_logo.png';
import cmuLogo from '../../../Images/University Logos/CMU_logo.png';
import mitLogo from '../../../Images/University Logos/MIT_logo.png';
import harvardLogo from '../../../Images/University Logos/Harvard_logo.png';
import oxfordLogo from '../../../Images/University Logos/Oxford_logo.png';
import yaleLogo from '../../../Images/University Logos/Yale_logo.png';
import princetonLogo from '../../../Images/University Logos/Princeton_logo.png';
import berkeleyLogo from '../../../Images/University Logos/Berkeley_logo.png';

class Contributors extends Component {
  render() {
    const imagesArray = [
      stanfordLogo,
      cmuLogo,
      mitLogo,
      harvardLogo,
      oxfordLogo,
      yaleLogo,
      princetonLogo,
      berkeleyLogo,
    ];

    const html = imagesArray.map((logo, key) => (
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-12 _logo_css centered-image"
        key={key}
      >
        <img src={logo} width="200" alt="logo" />
      </div>
    ));

    return (
      <section id="contributors">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
          <div className="_contributor">Contributors</div>
          <div className="_students_researchers">
            Made with
            {' '}
            <i className="fa fa-heart _heart" />
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
  }
}

export default Contributors;
