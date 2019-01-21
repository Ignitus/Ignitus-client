import React from "react";
import "../Styles/style.scss";

import { AVATARS, CONTRIBUTORS_DATA } from "./Data";
import { withErrorBoundary } from "../../ignitus-Internals";
import loader from "../../ignitus-Assets/Images/loader.gif";

class CoreTeam extends React.Component {
  constructor(props) {
    super(props);
    this.getSocialMediaIcons = this.getSocialMediaIcons.bind(this);
    this.hideSocialMediaIcons = this.hideSocialMediaIcons.bind(this);
  }

  getSocialMediaIcons = (index) => {
    let cardItem = document.getElementById(`member-${index}`);
    cardItem.classList.remove("display-none")
    cardItem.classList.add("display-flex");
  }

  hideSocialMediaIcons = (index) => {
    let cardItem = document.getElementById(`member-${index}`);
    cardItem.classList.remove("display-flex")
    cardItem.classList.add("display-none");
  }

  render() {
    const teamHTML = AVATARS.map((item, index) => (
      <div
        key={item.title}
        className="col-6 col-sm-4 col-md-3 avatar-wrapper text-center p-3"
      >
        <div 
          className="avatar bg-white p-3" 
          id="team-avatar-card" 
          onMouseOver={(e) => this.getSocialMediaIcons(index)}
          onMouseOut={e => this.hideSocialMediaIcons(index)}
        >
          <img
            className="rounded-circle mw-100 w-75"
            src={item.img}
            alt={`avatar ${item.name}`}
          />
          <div className="title-name mt-2">{item.title}</div>
          <div className="title-description">{item.description}</div>
          <div id={`member-${index}`} class="display-none">
            {item.facebook && <a href={item.facebook} className="team-sm-icon-color"><i class="fa fa-facebook-square"></i></a>}
            {item.linkedin && <a href={item.linkedin} className="team-sm-icon-color"><i class="fa fa-linkedin-square"></i></a>}
            {item.angellist && <a href={item.angelist} className="team-sm-icon-color"><i class="fa fa-angellist"></i></a>}
          </div>
          
        </div>
      </div>
    ));

    return (
      <div>
        <div className="team-wrapper container my-5 py-5">
          <div className="row">
            <div className="col">
              <div className="title text-center mb-3">Our Team</div>
              <div className="Team">
                <div className="row team_row">{teamHTML}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withErrorBoundary(CoreTeam);
