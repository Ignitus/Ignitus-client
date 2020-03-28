import React from 'react';
import * as S from '../style';
import {Opportunity} from '../types';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const DashBoardOpportunity = ({
  title,
  description,
  subtitle,
  src,
}: Opportunity) => (
  <Card title={title} description={description} subtitle={subtitle} src={src} />
);

const Card = ({title, description, subtitle, src}: Opportunity) => (
  <S.Container>
    <S.Row>
      <S.LeftRow>
        <img src={src} alt={title} />
      </S.LeftRow>
      <S.RightRow>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
      </S.RightRow>
    </S.Row>
  </S.Container>
);

export default withErrorBoundary(DashBoardOpportunity);
