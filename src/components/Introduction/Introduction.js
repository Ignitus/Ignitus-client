import React, { Component } from 'react';
import './introduction.css';
import resume from '../../images/Resume.png';

class Introduction extends Component {

  render() {

    return (

        <div className = "box">
        <div className = "container ">
              <img className = "_resume" src={resume} width="450" alt={"resume"} align="left"/> 
              <div className = "_intro _align" >Introducing</div>
              <div className = "_ignitus _align" >Ignitus</div>
              <div className = "_tagline _align" >Ignite your resume</div>
              <div className = "_content _align" >'Skyrocketing your career by providing you the best global opportunities.'</div>
        </div>
        </div>
        
    )
  }
}

export default Introduction;