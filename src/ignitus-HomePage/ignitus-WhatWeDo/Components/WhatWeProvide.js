import React from 'react';
import * as S from '../Styles';
import * as T from '../../../ignitus-Shared/Components/emotionStyles/shared';
import { withErrorBoundary } from '../../../ignitus-Shared/Components/errorBoundary';
import { data } from '../constants';

const WhatWeProvide = () => (
  <T.Wrapper id="what-we-do">
    <T.TopSection>
      <T.Title>What we provide?</T.Title>
      <T.Paragraph>
        Guidance &nbsp;
        {' '}
        <S.Icon>
          <i className="fa fa-graduation-cap" />
        </S.Icon>
        {' '}
        &nbsp; in well researched and goal-oriented courses, getting Internships
        etc.
      </T.Paragraph>
    </T.TopSection>
    <T.BottomSection>
      <T.BottomRow>
        {[...data].map(x => (
          <S.Card key={x.src}>
            <S.CardPicture src={x.src} alt="logo" />
            <S.CardText>{x.description}</S.CardText>
          </S.Card>
        ))}
      </T.BottomRow>
    </T.BottomSection>
  </T.Wrapper>
);

export default withErrorBoundary(WhatWeProvide);
