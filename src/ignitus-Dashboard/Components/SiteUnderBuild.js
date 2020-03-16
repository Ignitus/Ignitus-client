import React from 'react';
import '../Styles/style.scss';

const bannerImage = require('../../ignitus-Assets/Images/siteUnderBuild.png');

export default function SiteUnderBuild(){
  return (
    <div className="banner">
      <img
        src={bannerImage}
        className="img-responsive mx-auto d-block"
        alt="Site Under Build"
      />
      <div className="text-center">
        <p className="maintenanceHeading mb-3 mt-1">
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
}
