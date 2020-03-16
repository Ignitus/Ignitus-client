/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../Styles/style.scss';

const bannerImage = require('../../ignitus-Assets/Images/siteUnderBuild.png');

export const SiteUnderBuild = () => (
  <div className="banner">
    <img src={bannerImage} className="banner-img" alt="Site Under Build" />
    <div>
      <p className="maintenance-heading">Our site is under maintenance</p>
      <p className="maintenance-text">
        We&apos;re working on making better experiences for you.
      </p>
      <p className="maintenance-text">
        We should be back shortly. Thank you for the patience.
      </p>
    </div>
  </div>
);
