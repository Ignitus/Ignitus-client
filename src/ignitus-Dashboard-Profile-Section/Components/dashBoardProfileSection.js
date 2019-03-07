import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardProfileSection extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div><p>Profile Section</p></div>
    );
  }
}

export default withErrorBoundary(dashBoardProfileSection);
