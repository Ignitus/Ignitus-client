import React, { Component } from 'react';
import './partners.css';
import Woo_tech_logo from '../../Images/Partners Logos/wooTech.png';
import Sugar_labs    from '../../Images/Partners Logos/sugarLabs.png';
import mit_media     from '../../Images/Partners Logos/mit_media_lab.png';
import systers_logo  from '../../Images/Partners Logos/systers-logo.png';
import gs_logo       from '../../Images/Partners Logos/gslogo.png';
import lean_in       from '../../Images/Partners Logos/lean_in.png';
import progate       from '../../Images/Partners Logos/progate.jpg';

class Partner extends Component {



  render() {

    const Images_array = [systers_logo,gs_logo,Sugar_labs,Woo_tech_logo,progate,lean_in];

    let _html = Images_array.map(function (logo,key) {
          const wide = (key == 1 || key == 4 || key == 5) ? "170" : "250";
        return(

           <div className="col-lg-3 col-md-4 col-sm-6 col-12 _logo_css1 centered-image"
                key = {key}>
               <img src={logo} width={wide} alt={"logo"} />
            </div>
        )
      
    })

    return (
      <div>

        <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
              <div className = "_contributor">Supporters & Partners</div>
              <div className = "_students_researchers" >
                  Supported with <i className="fa fa-heart _heart"> </i> by following Organizations ...
              </div>
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

export default Partner;