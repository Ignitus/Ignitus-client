import React from 'react';
import * as S from '../styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { data } from '../constants';
import { Paragraph } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

const WhatWeDo: React.FunctionComponent = () => (
  <T.Wrapper id="what-we-do">
    <T.TopSection>
      <T.Title>What we Do?</T.Title>
      <Paragraph>
        Guidance &nbsp;
        {' '}
        <S.Icon>
          <i className="fa fa-graduation-cap" />
        </S.Icon>
        {' '}
        &nbsp; in well researched and goal-oriented courses, getting Internships
        etc.
      </Paragraph>
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
);

export default withErrorBoundary(WhatWeDo);
