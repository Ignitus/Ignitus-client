import React from 'react';
import '../Styles/style.scss';

const bannerImage = require('../../ignitus-Assets/Images/siteUnderBuild.png');

export const SiteUnderBuild = () => (
  <div className="banner">
      <img
        src={bannerImage}
        className="bannerImg"
        alt="Site Under Build"
      />
      <div>
        <p className="maintenanceHeading">
          Our site is under maintenance
        </p>
        <p className="maintenanceText">
          We're working on making better experiences for you.
        </p>
        <p className="maintenanceText">
          We should be back shortly. Thank you for the patience.
        </p>
      </div>
    </div>
);
