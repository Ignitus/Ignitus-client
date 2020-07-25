import React from 'react';
import * as t from '../constants';
import * as A from '../styles';
import { LazyImage } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/Ignitus-LazyImage/Component';

import { withErrorBoundary } from '../../../ignitus-Shared';

interface Props {
  title: string;
  studentRoute: string;
  professorRoute: string;
}

function commonLoginRegister(props: Props): React.ComponentType {
  const { title, studentRoute, professorRoute } = props;

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
            <LazyImage
              alt="Student auth"
              src={t.studentAuthentication}
              height="16rem"
              width="16rem"
              width1="10rem"
              height1="10rem"
              width2="14rem"
              height2="14rem"
              width5="16rem"
              height5="16rem"
            />
          </A.RightRow>
          <A.LeftRow to={professorRoute}>
            <A.Paragraph>Professor</A.Paragraph>
            <LazyImage
              alt="Professor auth"
              src={t.professorAuthentication}
              height="16rem"
              width="16rem"
              width1="10rem"
              height1="10rem"
              width2="14rem"
              height2="14rem"
              width5="16rem"
              height5="16rem"
            />
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
