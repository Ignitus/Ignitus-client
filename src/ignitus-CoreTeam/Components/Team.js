/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import '../Styles/style.scss';
import { Data } from '../constants';
import { withErrorBoundary } from '../../ignitus-Internals';

const PureCoreTeam = ({ team }) => (
  <div>
    <div className="team-wrapper container my-5 py-5">
      <div className="row">
        <div className="col">
          <div className="title text-center mb-3">
          Our Team
          </div>
          <div className="Team">
            <div className="row team_row">{team}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CoreTeam = () => {
  const getSocialMediaIcons = (index) => {
    const cardItem = document.getElementById(`member-${index}`);
    cardItem.classList.remove('display-none');
    cardItem.classList.add('display-flex');
  };

  const hideSocialMediaIcons = (index) => {
    const cardItem = document.getElementById(`member-${index}`);
    cardItem.classList.remove('display-flex');
    cardItem.classList.add('display-none');
  };

  const team = Data.map((item, index) => (
    <div
      key={item.title}
      className="col-6 col-sm-4 col-md-3 avatar-wrapper text-center p-3"
    >
      <div
        className="avatar bg-white p-3"
        id="team-avatar-card"
        onMouseOver={() => getSocialMediaIcons(index)}
        onMouseOut={() => hideSocialMediaIcons(index)}
      >
        <img
          className="rounded-circle mw-100 w-75"
          src={item.img}
          alt={`avatar ${item.name}`}
        />
        <div className="title-name mt-2">{item.title}</div>
        <div className="title-description">{item.description}</div>
        <div id={`member-${index}`} className="display-none">
          {item.linkedin && (
            <a href={item.linkedin} className="team-sm-icon-color">
              <i className="fa fa-linkedin-square" />
            </a>
          )}
          {item.angellist && (
            <a href={item.angellist} className="team-sm-icon-color">
              <i className="fa fa-angellist" />
            </a>
          )}
        </div>
      </div>
    </div>
  ));
  return <PureCoreTeam team={team} />;
};

export default withErrorBoundary(CoreTeam);
