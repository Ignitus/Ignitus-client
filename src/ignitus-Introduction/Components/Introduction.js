import React from 'react';
import '../Styles/style.css';
import resume from '../../ignitus-Assets/Images/Resume.png';

const Introduction = () => (
  <div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5 box">
    <div className="row">
      <div className="col-sm-8 offset-sm-2 col-md-5 col-lg-4 offset-lg-1 offset-md-1">
        <img className="img-fluid" src={resume} alt="resume" align="left" />
      </div>
      <div className="col-sm-12 col-md-5 col-lg-7">
        <div className="intro   align"> Introducing</div>
        <div className="ignitus align">Ignitus</div>
        <div className="tagline align">Ignite Your resume</div>
        <div className="content align">
          'Skyrocketing Your Career By Providing You The Best Global
          Opportunities.'
        </div>
      </div>
    </div>
  </div>
);
export default Introduction;
