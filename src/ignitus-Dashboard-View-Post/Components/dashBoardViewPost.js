import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardViewPost extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div><p>View post section</p></div>
    );
  }
}

export default withErrorBoundary(dashBoardViewPost);
