import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../style';

export const Notfound = () => (
  <React.Fragment>
    <S.EyesContainer>
      <S.Eyes />
      <S.Eyes />
    </S.EyesContainer>
    <S.AnimationText />
    <S.MessageContainer>
      <S.Message>
        <S.StyledParagraph>Looks like you're lost!</S.StyledParagraph>
        <S.StyledParagraph>
          The page you are looking for is not available! 🔨
        </S.StyledParagraph>
      </S.Message>
      <S.StyledPrimaryBtn size="large">
        <Link to="/"> Home Page </Link>
      </S.StyledPrimaryBtn>
    </S.MessageContainer>
  </React.Fragment>
);
