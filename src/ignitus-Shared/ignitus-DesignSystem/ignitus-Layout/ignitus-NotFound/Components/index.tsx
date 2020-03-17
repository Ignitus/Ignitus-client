import React from 'react';
import {Link} from 'react-router-dom';
import '../style.scss';
import * as S from '../style';

export const Notfound = () => (
  <React.Fragment>
    <S.EyesContainer>
      <S.Eyes />
      <S.Eyes />
    </S.EyesContainer>
    <div className="ani-main" />
    <div className="ani-body" />
    <div className="container-404">
      <div className="content">
        <p>404</p>
        <p>Looks like you're lost.</p>
        <p>The page you are looking for is not avaible!</p>
        <p>
          <a href="/" className="link_404">
            Go to Home
          </a>
        </p>
      </div>
    </div>
  </React.Fragment>
);
