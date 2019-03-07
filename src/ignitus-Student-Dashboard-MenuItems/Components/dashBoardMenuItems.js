import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashboardMenuItems extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div><p>About Privacy career option</p></div>
    );
  }
}

export default withErrorBoundary(dashboardMenuItems);
