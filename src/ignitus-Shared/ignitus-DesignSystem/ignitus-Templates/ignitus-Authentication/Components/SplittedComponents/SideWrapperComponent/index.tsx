import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import * as t from '../../../constants';
import {SideWrapperProps} from '../../../types';
import * as A from '../../../styles';

export const SideWrapper: FunctionComponent<SideWrapperProps> = ({
  role,
  authenticationType,
  alternateRole,
}) => (
  <A.LeftRow>
    <A.RightColumnOne>
      {' '}
      <A.Image
        alt={`${role}auth`}
        src={
          role === 'Student'
            ? t.studentAuthentication
            : t.professorAuthentication
        }
      />
    </A.RightColumnOne>
    <A.RightColumnTwo>
      <A.Paragraph>Let&apos;s get started</A.Paragraph>
      <A.Paragraph>
        Skyrocket your career with best global opportunities.{' '}
        <span role="img" aria-label="hat">
          🎓
        </span>
      </A.Paragraph>
      <A.Paragraph>
        <Link
          to={`/${authenticationType.toLocaleLowerCase()}/${alternateRole.toLocaleLowerCase()}`}
        >
          {' '}
          I am a {alternateRole}
        </Link>
      </A.Paragraph>
    </A.RightColumnTwo>
  </A.LeftRow>
);
