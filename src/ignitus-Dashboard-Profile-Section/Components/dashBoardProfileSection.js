import React from "react";
import * as data from './Constants';
import '../Styles/style.scss';
import { withErrorBoundary } from "../../ignitus-Internals";

class dashBoardProfileSection extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="card-profile-container">
        <div className="d-flex p-4">
          <div>
            <img className="m-1 profile-avatar" alt="card" src={data.ProfileAvatar} />
          </div>
          <div className="ml-3">
            <h3 className="profile-font profile-name-bold">
              Sophia Carter
          </h3>
            <h5 className="profile-font profile-name-tagline">Literature Student</h5>
            <button className="btn btn-success btn-rounded button-bg px-3 py-2">
              View Profile
          </button>
          </div>
        </div>
        <p className="text-dark profile-name-tagline p-3"><span className="round-turnin-icon"></span>21 students and 11 professors are tracking your progress</p>
      </div>
    );
  }
}

export default withErrorBoundary(dashBoardProfileSection);
