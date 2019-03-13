import React from "react";
import '../Styles/style.scss';
import { withErrorBoundary } from "../../ignitus-Internals";

class dashboardMenuItems extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div className="menu-container">
        <a className="menu-link">About</a>
        <a className="menu-link">Privacy</a>
        <a className="menu-link">Careers</a>
        <a className="menu-link">Help Center</a>
        <a className="menu-link">Terms & Conditions</a>
        <p className="menu-footer">Ignitus 2018</p>
      </div>
    );
  }
}

export default withErrorBoundary(dashboardMenuItems);
