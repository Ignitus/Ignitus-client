import React, { Component } from 'react';
import './contributors.css';
import Stanford_logo from '../../images/Stanford_logo.png';
import CMU_logo from '../../images/CMU_logo.png';
import MIT_logo from '../../images/MIT_logo.png';
import Harvard_logo from '../../images/Harvard_logo.png';
import Oxford_logo from '../../images/Oxford_logo.png';
import Yale_logo from '../../images/Yale_logo.png';
import Princeton_logo from '../../images/Princeton_logo.png';
import Berkeley_logo from '../../images/Berkeley_logo.png';

class Contributors extends Component {



  render() {

    const Images_array = [Stanford_logo,CMU_logo,MIT_logo,Harvard_logo,Oxford_logo,Yale_logo,Princeton_logo,Berkeley_logo];

    let _html = Images_array.map(function (logo,key) {

        return(

           <div className="col-sm-3 col-xs-4 _logo_css" key = {key}>
                  <img src={logo} width="200" alt={"logo"}/> 
            </div>

        )
      
    })

    return (
      <div>

        <div className = "_align">
              <div className = "_contributor">Contributors</div>
              <div className = "_students_researchers" >Made with <i className="fa fa-heart _heart"> </i> by Students,Researches and Alumni of ...</div>
         </div>
        
        <div className = "container">
          <div className = "row">
            {_html}
          </div>
        </div>
      </div>
    )
  }
}

export default Contributors;