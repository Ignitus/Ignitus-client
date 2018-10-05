import React, { Component } from "react";
import "../Styles/style.css";
import Stanford_logo from "../../../Images/University Logos/Stanford_logo.png";
import CMU_logo from "../../../Images/University Logos/CMU_logo.png";
import MIT_logo from "../../../Images/University Logos/MIT_logo.png";
import Harvard_logo from "../../../Images/University Logos/Harvard_logo.png";
import Oxford_logo from "../../../Images/University Logos/Oxford_logo.png";
import Yale_logo from "../../../Images/University Logos/Yale_logo.png";
import Princeton_logo from "../../../Images/University Logos/Princeton_logo.png";
import Berkeley_logo from "../../../Images/University Logos/Berkeley_logo.png";

class Contributors extends Component {
  render() {
    const Images_array = [
      Stanford_logo,
      CMU_logo,
      MIT_logo,
      Harvard_logo,
      Oxford_logo,
      Yale_logo,
      Princeton_logo,
      Berkeley_logo
    ];

    let _html = Images_array.map(function(logo, key) {
      return (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-12 _logo_css centered-image"
          key={key}
        >
          <img src={logo} width="200" alt={"logo"} />
        </div>
      );
    });

    return (
      <section id="contributors">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
          <div className="_contributor">Contributors</div>
          <div className="_students_researchers">
            Made with <i className="fa fa-heart _heart" /> by Students,
            Researchers and Alumni of ...
          </div>
        </div>

        <div className="container">
          <div className="row">{_html}</div>
        </div>
      </section>
    );
  }
}

export default Contributors;
