import React from "react";
import '../Styles/style.scss';
import { withErrorBoundary } from "../../ignitus-Internals";

class dashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="sidebar-container mt-5">
        <ul className="p-3">
          <li className="p-2 sidebar-font">Saved</li>
          <li className="p-2 sidebar-font">Liked</li>
          <li className="p-2 sidebar-font">Applied</li>
          <li className="p-2 sidebar-font">My Network</li>
          <li className="p-2 sidebar-font">My Mentors</li>
          <li className="p-2 sidebar-font">Message</li>
        </ul>  
      </div>
    );
  }
}

export default withErrorBoundary(dashboardSidebar);
