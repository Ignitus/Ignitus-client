import React from "react";
import '../Styles/style.scss';
import { withErrorBoundary } from "../../ignitus-Internals";


const dashBoardWritePost = () => {
  return (
    <div className="write-post-container">
      <textarea placeholder="Share an article poll, document, video, photo or idea.
      Use @ to mention someone."
      />
      <div className="post-icons mx-3 mb-1">
        <ul>
          <li><i className="material-icons write-post-icons">library_books</i></li>
          <li><i className="material-icons write-post-icons">poll</i></li>
          <li><i className="material-icons write-post-icons">picture_as_pdf</i></li>
          <li><i className="material-icons write-post-icons">video_library</i></li>
          <li><i className="material-icons write-post-icons">photo_camera</i></li>
        </ul>
      </div>
      <button className="btn btn-success btn-rounded button-bg p-1 px-4 mx-3 mb-1 float-right" type="button">
        <span className="btn-font">Post</span>
      </button>
    </div>
  );
};


export default withErrorBoundary(dashBoardWritePost);
