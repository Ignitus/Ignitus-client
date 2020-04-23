import React from 'react';
import * as S from '../styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import {withErrorBoundary} from '../../../ignitus-Shared';
import {data} from '../constants';

export const WhatWeDo: React.FunctionComponent = withErrorBoundary(() => (
  <div id="what-we-do">
    <T.TopSection>
      <T.Title>What we Do?</T.Title>
      <S.Paragraph>
        Guidance{' '}
        <span role="img" aria-label="hat">
          🎓
        </span>{' '}
        in well researched and goal-oriented courses, Internships etc.
      </S.Paragraph>
    </T.TopSection>
    <T.BootStrapSection>
      <T.BottomRow>
        {[...data].map(x => (
          <S.Card key={x.src}>
            <S.CardPicture src={x.src} alt="logo" />
            <S.Paragraph>{x.description}</S.Paragraph>
          </S.Card>
        ))}
      </T.BottomRow>
    </T.BootStrapSection>
  </div>
));
