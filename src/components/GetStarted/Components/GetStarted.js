import React, { Component } from "react";
import "../Styles/style.css";


class GetStarted extends Component {
  render() {
    return (
      <div className="_align container">
        <div className="_started">
          Get started for free - join thousands of students and researchers
          already using Ignitus to share their knowledge, work together, and get
          amazing opportunites.
        </div>
        <a href="/signup" className="btn btn-md _button" role="button">
          Sign Up
        </a>
      </div>
    );
  }
}

export default GetStarted;
