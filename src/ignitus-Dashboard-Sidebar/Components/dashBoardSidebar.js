import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div><p>Action like saved, applied ...</p></div>
    );
  }
}

export default withErrorBoundary(dashboardSidebar);
