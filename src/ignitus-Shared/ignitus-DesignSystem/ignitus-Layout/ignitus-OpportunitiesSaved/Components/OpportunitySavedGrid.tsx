import React from 'react';
import * as S from '../style';

import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import {opportunity} from '../constants';
import universityOfMelbourne from '../../../ignitus-Assets/ignitus-Images/img-Png/universityOfMelbourne.png';

export const OpportunitySavedLayout = () => (
  <S.OpportunitiesSavedGrid>
    {opportunity.map(({title, description, subtitle, src}: any) => (
      <OpportunitySavedCard
        title={title}
        description={description}
        subtitle={subtitle}
        src={universityOfMelbourne}
      />
    ))}
  </S.OpportunitiesSavedGrid>
);


const OpportunitySavedCard = ({title, description, subtitle, src}: any) => (
  <S.OpportunityContainer>
    <S.ImageDescriptionContainer>
      <S.ImageContainer>
        <img src={src} alt={title} height="120" />
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

export default withErrorBoundary(OpportunitySavedLayout);
