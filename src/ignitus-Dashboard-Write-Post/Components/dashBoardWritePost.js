import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardWritePost extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div><p>Write post section</p></div>
    );
  }
}

export default withErrorBoundary(dashBoardWritePost);
