import React from "react";
import "../Styles/style.scss";

import { AVATARS, CONTRIBUTORS_DATA } from "./Data";
import { withErrorBoundary } from "../../ignitus-Internals";
import loader from "../../ignitus-Assets/Images/loader.gif";
import shortid from "shortid";

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContributorsData();
  }

  render() {
    const { presets, isFetching } = this.props.contributorsData;

    if (isFetching) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
          <div className="loader">
            <img src={loader} />
          </div>
        </div>
      );
    }

    const contributorsHTML = presets.map(item => (
      <a
        key={shortid.generate()}
        target="_blank"
        rel="noopener noreferrer"
        href={item.html_url}
        className="Contributor"
      >
        <img src={item.avatar_url} width="100%" alt={`avatar ${item.login}`} />
      </a>
    ));

    return (
      <div>
        <div className="team-wrapper container my-5 py-5">
          <div className="row">
            <div className="col">
              <div className="title text-center mb-3">Our Contributors</div>
              <div className="studentsResearchers">
                This project was made possible by these contributors
              </div>
              <div className="box-model">
                <div className="Contributors m-top">{contributorsHTML}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(Team);

