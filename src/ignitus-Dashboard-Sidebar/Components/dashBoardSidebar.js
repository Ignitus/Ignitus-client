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
          <li className="p-1 sidebar-font"><i className="fa fa-heart p-2"></i>Saved</li>
          <li className="p-1 sidebar-font"><i className="fa fa-heart p-2"></i>Liked</li>
          <li className="p-1 sidebar-font"><i className="fa fa-heart p-2"></i>Applied</li>
          <li className="p-1 sidebar-font"><i className="fa fa-heart p-2"></i>My Network</li>
          <li className="p-1 sidebar-font"><i className="fa fa-heart p-2"></i>My Mentors</li>
          <li className="p-1 sidebar-font"><i className="fa fa-paper-plane p-2"></i>Message</li>
        </ul>  
      </div>
    );
  }
}

export default withErrorBoundary(dashboardSidebar);
