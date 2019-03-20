import React from "react";
import '../Styles/style.scss';
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardWritePost extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div class="write-post-container">
        <textarea placeholder="Share an article poll, document, video, photo or idea.
        Use @ to mention someone."></textarea>
        <div className="post-icons mx-3 my-4">
        <ul>
        <li><i class="material-icons">bookmark</i></li>
        <li><i class="fa fa-folder" aria-hidden="true"></i></li>
        <li><i class="fa fa-folder" aria-hidden="true"></i></li>
        <li><i class="fa fa-folder" aria-hidden="true"></i></li>
        <li><i class="fa fa-folder" aria-hidden="true"></i></li>
        </ul>
        </div>
        <button className="btn btn-success btn-rounded button-bg p-1 px-4 mx-3 my-4 float-right">
          <span className="btn-font">Post</span>
        </button>
      </div>
    );
  }
}

export default withErrorBoundary(dashBoardWritePost);
