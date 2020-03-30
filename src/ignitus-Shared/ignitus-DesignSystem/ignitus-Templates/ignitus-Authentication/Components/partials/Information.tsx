import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import * as t from '../../constants';
import {
  userRole,
  authType,
} from '../../types';


interface InformationProps {
  role: userRole;
  authenticationType: authType;
  alternateRole: userRole;
}

export const Information: FunctionComponent<InformationProps> = ({
  role,
  authenticationType,
  alternateRole,
}) => (
  <div className="col-md-6 p-0 container-image">
    <img
      alt={`${role}auth`}
      className="img-fluid img-login d-block"
      src={(role === 'Student') ? t.studentAuthentication : t.professorAuthentication}
    />

    <div className="text-below-image text-center">
      <p className="mb-5">Let&apos;s get started</p>
      <p>Skyrocket your career with best global opportunities. 🎓</p>
      <p>
        <Link
          to={`/${authenticationType.toLocaleLowerCase()}/${alternateRole.toLocaleLowerCase()}`}
          className="text-center linkform"
        >
          {' '}
          I am a {alternateRole}
        </Link>
      </p>
    </div>
  </div>
);
