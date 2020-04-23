import React from 'react';
import * as t from '../constants';
import * as A from '../styles';

import {withErrorBoundary} from '../../../ignitus-Shared';

interface Props {
  title: string;
  studentRoute: string;
  professorRoute: string;
}

function commonLoginRegister(props: Props): React.ComponentType {
  const {title, studentRoute, professorRoute} = props;

  const SignInPage = () => (
    <A.Container>
      <A.Section>
        <A.TopSection>
          <A.Title>{title}</A.Title>
          <A.SubTitle> Who are you? </A.SubTitle>
        </A.TopSection>
        <A.BottomSection>
          <A.RightRow to={studentRoute}>
            <A.Paragraph>Student</A.Paragraph>
            <A.Image alt="Student auth" src={t.studentAuthentication} />
          </A.RightRow>
          <A.LeftRow to={professorRoute}>
            <A.Paragraph>Professor</A.Paragraph>
            <A.Image alt="Professor auth" src={t.professorAuthentication} />
          </A.LeftRow>
        </A.BottomSection>
      </A.Section>
    </A.Container>
  );

  return withErrorBoundary(SignInPage);
}

export const CommonLoginUI = commonLoginRegister({
  title: 'Sign In',
  studentRoute: '/login/student',
  professorRoute: '/login/professor',
});

export const CommonSignUpUI = commonLoginRegister({
  title: 'Sign Up',
  studentRoute: '/signup/student',
  professorRoute: '/signup/professor',
});
