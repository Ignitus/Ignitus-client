/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import '../Styles/style.scss';
import { Data } from '../constants';
import { withErrorBoundary } from '../../ignitus-Internals';

const PureCoreTeam = ({ team }) => (
  <div>
    <div className="teamWrapper">{team}</div>
  </div>
);

const CoreTeam = () => {
  const team = Data.map(item => (
    <div
      key={item.title}
      className="team-card"
    >
      <div
        className="avatar"
      >
        <img
          className="rounded-img"
          src={item.img}
          alt={`avatar ${item.name}`}
        />
        <div className="title-name mt-2">{item.title}</div>
        <div className="title-description">{item.description}</div>
      </div>
    </div>
  ));
  return <PureCoreTeam team={team} />;
};

export default withErrorBoundary(CoreTeam);
