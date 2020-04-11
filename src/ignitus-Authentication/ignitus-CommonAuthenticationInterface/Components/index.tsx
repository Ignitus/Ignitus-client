import React from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import * as t from '../constants';
import '../Styles/style.scss';

interface Props {
  title: string;
  studentRoute: string;
  professorRoute: string;
}

function commonLoginRegister(props: Props): React.ComponentType {
  const {title, studentRoute, professorRoute} = props;

  const SignInPage = () => (
    <div className="col-lg-12 col-sm-12 col-md-12 col-12 container-bg">
      <div className="p-0 p-sm-5 pt-5">
        <div className="col-lg-7 col-md-8 col-sm-12 col-12 mt-5 box-container">
          <div className="login-signup m-top">
            <h3>{title}</h3>
            <p> Who are you? </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 col-md-5 ml-lg-5 ml-md-4 col-sm-5 col p-0 h-50 common-auth-ui-css">
              <p className="mb-5 text-center common-ui-text">Student</p>
              <Link to={studentRoute}>
                <img
                  alt="Student auth"
                  className="img-fluid lazyload"
                  data-src={t.studentAuthentication}
                />
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 ml-lg-4 ml-md-4 col-sm-5 ml-sm-4 col p-0 common-auth-ui-css">
              <p className="mb-5 text-center common-ui-text">Professor</p>
              <Link to={professorRoute}>
                <img
                  alt="Professor auth"
                  className="img-fluid lazyload"
                  data-src={t.professorAuthentication}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
