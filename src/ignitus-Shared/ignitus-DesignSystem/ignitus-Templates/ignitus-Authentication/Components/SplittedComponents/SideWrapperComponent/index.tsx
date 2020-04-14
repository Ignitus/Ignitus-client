import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import * as t from '../../../constants';
import { SideWrapperProps } from '../../../types';

export const SideWrapper: FunctionComponent<SideWrapperProps> = ({
  role,
  authenticationType,
  alternateRole,
}) => (
  <div className="col-md-6 p-0 container-image">
    <img
      alt={`${role}auth`}
      className="img-fluid img-login d-block lazyload"
      src={(role === 'Student') ? t.studentAuthentication : t.professorAuthentication}
    />

    <div className="text-below-image text-center">
      <p className="mb-5">Let&apos;s get started</p>
      <p>Skyrocket your career with best global opportunities. <span role="img" aria-label="hat">🎓</span></p>
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
