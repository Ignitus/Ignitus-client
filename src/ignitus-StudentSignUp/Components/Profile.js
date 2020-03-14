/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import progress from '../Images/Group12.1.png';
import image_map from '../Images/image-map.png';
import { withErrorBoundary } from '../../ignitus-Internals';

import '../Styles/style.scss';

const Signup = () => {
  
  return (
    <div className="col-lg-12" style={{height: "65vw", backgroundColor: "white"}}>
    <div className="progress-bar-signup" ><img  src={progress}></img></div>
      <div className="welcome">Welcome, Sophia</div>
      <div className="content1">Let’s start with your profile. This will get you successful on Ignitus</div>
      <br></br>
      <div className="content1">Confirm your own location and time zone to make communication easier! </div>
      <div className="flex-profile">
      <div >
      <form>
        <label className="country">Country/Region</label>
        <br />
        <select className="dropdown" >
          <option value="Select country" selected>Select country</option>
          <option value="country">Country</option>
        </select>
        <label className="country">Province</label>
        <br />
        <select className="dropdown">
          <option value="Select province" selected>Select province</option>
          <option value="province">Province</option>
        </select>
        <label className="country">Time zone</label>
        <br />
        <select className="dropdown">
          <option value="Select timezone" selected>Select timezone</option>
          <option value="timezone">Time Zone</option>
        </select>

      </form>
      </div>
      <div className="image_map"><img src={image_map}></img></div>
      </div>
      <div className="text-center">
      <button className="save-button"><Link to="/signup/interest" className="save">Save and Continue</Link></button>
      </div>
      <div className="skip">Skip for now &nbsp; >></div>    
    </div>
  )
};

export default withErrorBoundary(Signup);