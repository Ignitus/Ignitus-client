import React from 'react';
import '../Styles/style.scss';

import Avatars from './Data';
import {withErrorBoundary} from '../../ignitus-Internals';

const Team = () => {
  const avatarHTML = Avatars.map((item, key) => (
    <div key={key} className="col-6 col-sm-4 col-md-3 avatar-wrapper text-center p-3">
      <div className="avatar bg-white p-3">
        <img className="rounded-circle mw-100 w-75" src={item.path} alt={`avatar ${item.name}`} />
        <div className="title-name mt-2">{item.title}</div>
        <div className="title-position">{item.position}</div>
      </div>
    </div>
  ));

  return (
    <div className="team-wrapper container my-5 py-5">
      <div className="row">
        <div className="col">
          <div className="title text-center mb-3">Our Team</div>
          <div className="Team">
            <div className="row team_row">
              {avatarHTML}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withErrorBoundary(Team);
