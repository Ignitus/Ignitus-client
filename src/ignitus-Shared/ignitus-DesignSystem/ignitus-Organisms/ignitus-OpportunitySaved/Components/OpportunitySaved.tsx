import React from 'react';
import * as S from '../styles';
// import { Description } from '../types';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const OpportunitySavedCard = ({title, description, subtitle, data}: any) => (
  <S.OpportunityContainer>
    <S.ImageDescriptionContainer>
      <S.ImageContainer>
        <img src={data} alt={title} height="120" />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <S.OpportunityTitle>{title}</S.OpportunityTitle>
        <S.OpportunitySubTitle>{subtitle}</S.OpportunitySubTitle>
          <S.OpportunityDescription>
            {description}
          </S.OpportunityDescription>
      </S.DescriptionContainer>
    </S.ImageDescriptionContainer>
  </S.OpportunityContainer>
);

export default withErrorBoundary(OpportunitySavedCard);