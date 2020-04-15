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
          The page you are looking for is not available! <span role="img" aria-label="hammer">🔨</span>
        </S.StyledParagraph>
      </S.Message>
      <S.StyledButton size="large" category="primary">
        <Link to="/"> Home Page </Link>
      </S.StyledButton>
    </S.MessageContainer>
  </React.Fragment>
);
