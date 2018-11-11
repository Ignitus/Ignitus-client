import React from 'react';
import '../Styles/style.scss';

import { AVATARS, CONTRIBUTORS_DATA } from './Data';
import {withErrorBoundary} from '../../ignitus-Internals';

const Team = () => {
  const teamHTML = AVATARS.map((item, key) => (
    <div key={key} className="col-6 col-sm-4 col-md-3 avatar-wrapper text-center p-3">
      <div className="avatar bg-white p-3">
        <img className="rounded-circle mw-100 w-75" src={item.img} alt={`avatar ${item.name}`} />
        <div className="title-name mt-2">{item.title}</div>
        <div className="title-description">{item.description}</div>
      </div>
    </div>
  ));
  const contributorsHTML = CONTRIBUTORS_DATA.map((item, key) => (
    <div key={key} className="col-3 col-sm-3 col-md-2 avatar-wrapper text-center p-2">
      <div className="p-3">
        <img className="rounded-circle mw-100 w-75" src={item.img} alt={`avatar ${item.name}`} />
        <div className="title-name mt-2">{item.title}</div>
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
            <div className="row team_row">
              {teamHTML}
            </div>
          </div>
        </div>
      </div>
      </div>

    <div className="team-wrapper container my-5 py-5">
      <div className="row">
        <div className="col">
          <div className="title text-center mb-3">Our Contributors</div>
          <div className="studentsResearchers">
          This project was made possible by these contributors
        </div>
          <div className="Team">
            <div className="row team_row">
              {contributorsHTML}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default withErrorBoundary(Team);
