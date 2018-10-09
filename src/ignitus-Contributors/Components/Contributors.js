import React from 'react';
import '../Styles/style.css';
import stanfordLogo from '../../Assets/Images/University Logos/Stanford_logo.png';
import cmuLogo from '../../Assets/Images/University Logos/CMU_logo.png';
import mitLogo from '../../Assets/Images/University Logos/MIT_logo.png';
import harvardLogo from '../../Assets/Images/University Logos/Harvard_logo.png';
import oxfordLogo from '../../Assets/Images/University Logos/Oxford_logo.png';
import yaleLogo from '../../Assets/Images/University Logos/Yale_logo.png';
import princetonLogo from '../../Assets/Images/University Logos/Princeton_logo.png';
import berkeleyLogo from '../../Assets/Images/University Logos/Berkeley_logo.png';

const Contributors = () => {
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
};

export default Contributors;
