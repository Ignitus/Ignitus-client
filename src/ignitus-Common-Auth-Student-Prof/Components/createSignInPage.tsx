import React from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as t from './constants';
import '../Styles/style.scss';

interface SignInConfig {
  title: string;
  studentRoute: string;
  professorRoute: string;
}

function createSignInPage(config: SignInConfig): React.ComponentType {
  const {title, studentRoute, professorRoute} = config;

  const SignInPage = () => (
    <div className="col-lg-12 col-sm-12 col-md-12 col-12 container-bg">
      <div className="p-5">
        <div className="col-lg-7 col-md-8 col-sm-12 col-8 box-container">
          <div className="login-signup m-top">
            <h3>{title}</h3>
            <p> Who are you? </p>
          </div>
          <div className="row mt-4">
            <div className=" col-lg-5 col-md-5 ml-lg-5 ml-md-4 col-sm-5 p-0 common-auth-ui-css">
              <p className="mb-5 text-center common-ui-text">Student</p>
              <Link to={studentRoute}>
                <img
                  alt="Student auth"
                  className="img-fluid"
                  src={t.studentAuth}
                />
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 ml-lg-4  ml-md-4 col-sm-5 ml-sm-4 p-0 common-auth-ui-css">
              <p className="mb-5 text-center common-ui-text">Professor</p>
              <Link to={professorRoute}>
                <img
                  alt="Professor auth"
                  className="img-fluid"
                  src={t.professorAuth}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  SignInPage.displayName = 'SignInPage';

  return withErrorBoundary(SignInPage);
}

export const CommonLoginUI = createSignInPage({
  title: 'Sign In',
  studentRoute: '/login/student',
  professorRoute: '/login/professor',
});

export const CommonSignUpUI = createSignInPage({
  title: 'Sign Up',
  studentRoute: '/signup/student',
  professorRoute: '/signup/professor',
});
