import React from 'react';
import * as S from '../styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { data } from '../constants';
import { Paragraph } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const WhatWeDo: React.FunctionComponent = withErrorBoundary(() => (
  <T.Wrapper id="what-we-do">
    <T.TopSection>
      <T.Title>What we Do?</T.Title>
      <S.Paragraph>
        Guidance 🎓 in well researched and goal-oriented courses, getting Internships
        etc.
      </S.Paragraph>
    </T.TopSection>
    <T.BottomSection>
      <T.BottomRow>
        {[...data].map(x => (
          <S.Card key={x.src}>
            <S.CardPicture src={x.src} alt="logo" />
            <Paragraph>{x.description}</Paragraph>
          </S.Card>
        ))}
      </T.BottomRow>
    </T.BottomSection>
  </T.Wrapper>
));
