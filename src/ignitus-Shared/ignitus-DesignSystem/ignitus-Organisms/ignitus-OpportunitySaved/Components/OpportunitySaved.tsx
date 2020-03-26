import React from 'react';
import * as S from '../styles';
import universityOfMelbourne from '../../../ignitus-Assets/ignitus-Images/img-Png/universityOfMelbourne.png'
import { Description } from '../types';
import { opportunity } from '../constants';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const OpportunitySavedCard = ({title, description, subtitle, data}: Description) => (
  <S.OpportunityContainer>
    <S.ImageDescriptionContainer>
      <S.ImageContainer>
        <img src={universityOfMelbourne} alt={title} height="120" />
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

const OpportunitySavedLayout = () => (
  <S.OpportunityList>
    <S.OpportunitiesSavedGrid>
    {opportunity.map(({title, description, subtitle, data}: Description) => (
        <OpportunitySavedCard title={title} description={description} subtitle={subtitle} data={data} />
    ))}
    </S.OpportunitiesSavedGrid>
  </S.OpportunityList>
);

export default withErrorBoundary(OpportunitySavedLayout);