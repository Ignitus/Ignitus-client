import React from 'react';
import * as S from '../style';
import { OpportunityList } from '../constants';
import { Opportunity } from '../types';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const DashBoardOpportunity = () => (
  <S.OpportunitiesSavedGrid>
    {OpportunityList.map(({title, description, subtitle, src}: Opportunity) => (
      <OpportunitySavedCard
        title={title}
        description={description}
        subtitle={subtitle}
        src={src}
      />
    ))}
  </S.OpportunitiesSavedGrid>
);

const OpportunitySavedCard = ({
  title,
  description,
  subtitle,
  src,
}: Opportunity) => (
  <S.DashboardOpportunityContainer>
    <S.Row>
      <S.LeftRow>
        <img src={src} alt={title} height="120" />
      </S.LeftRow>
      <S.RightRow>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
      </S.RightRow>
    </S.Row>
  </S.DashboardOpportunityContainer>
);

export default withErrorBoundary(DashBoardOpportunity);
