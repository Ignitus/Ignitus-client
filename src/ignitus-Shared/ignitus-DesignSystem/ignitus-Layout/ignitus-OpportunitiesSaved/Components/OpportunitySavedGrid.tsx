import React from 'react';
import * as S from '../style';

import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { opportunityList } from '../constants';
import { Opportunity } from '../types';

export const OpportunitySavedLayout = () => (
  <S.OpportunitiesSavedGrid>
    {opportunityList.map(({title, description, subtitle, src}: Opportunity) => (
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
  <S.OpportunityContainer>
    <S.ImageDescriptionContainer>
      <S.ImageContainer>
        <img src={src} alt={title} height="120" />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <S.OpportunityTitle>{title}</S.OpportunityTitle>
        <S.OpportunitySubTitle>{subtitle}</S.OpportunitySubTitle>
        <S.OpportunityDescription>{description}</S.OpportunityDescription>
      </S.DescriptionContainer>
    </S.ImageDescriptionContainer>
  </S.OpportunityContainer>
);

export default withErrorBoundary(OpportunitySavedLayout);
