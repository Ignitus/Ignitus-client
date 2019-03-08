import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardChatlist extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div className="mb-0"><p>Chat list</p></div>
    );
  }
}

export default withErrorBoundary(dashBoardChatlist);
