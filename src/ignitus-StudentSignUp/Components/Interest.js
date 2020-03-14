/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {Component} from 'react'
import progress from '../Images/Group 12.2.png';
import { Link } from 'react-router-dom';

import { withErrorBoundary } from '../../ignitus-Internals';
import group17 from '../Images/Group_17.png'

import '../Styles/style.scss';

class Interest extends Component {

  render() {
    return (
      <div className="col-lg-12" style={{height: "80vw", backgroundColor: "white"}}>
      <div className="progress-bar-signup"><img src={progress}></img></div>
      <div className="welcome">What are you interested in?</div>
      <div className="content1">This will customize your experience<br/>This will help you to discover right people and opportunities</div>
      <div className="flex-interest">
        <div className="checkboxes">
          <label className="cbox"><input type="checkbox" id="Oppurtunities" name="Oppurtunities" value="yes"/> Oppurtunities</label><br/>
          <label className="cbox"><input type="checkbox" id="Build-Network" name="Build-Network" value="yes"/> Build Network</label><br/>
          <label className="cbox"><input type="checkbox" id="read-blogs" name="read-blogs" value="yes"/> Read Blogs</label><br/>
          <label className="cbox"><input type="checkbox" id="all-of-these" name="all-of-these" value="yes"/> All of these</label><br/>
        </div>
        <div className="group17">
          <img src={group17} alt="group17"></img>
        </div>
      </div>
      <div className="text-center">
      <button className="save-button"><Link to="/signup/email" className="save">Save and Continue</Link></button>
      </div>
      <div className="skip">Skip for now &nbsp; >></div>   
      </div>
    )
  }
}

export default withErrorBoundary(Interest);