import React from "react";
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardChatlist extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div><p>Chat list</p></div>
    );
  }
}

export default withErrorBoundary(dashBoardChatlist);
