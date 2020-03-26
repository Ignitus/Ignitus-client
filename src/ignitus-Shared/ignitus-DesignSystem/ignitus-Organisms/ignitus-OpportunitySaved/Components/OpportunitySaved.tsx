import React from 'react';
import * as S from '../styles';
import universityOfMelbourne from '../../../ignitus-Assets/ignitus-Images/img-Png/universityOfMelbourne.png'
import { Description } from '../types';
import { Data, Title, Subtitle, OpportunityDescription } from '../constants';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const Opportunity = ({title, description, subtitle, data}: Description) => (
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

const opportunity = [{'title':Title[0],'description':OpportunityDescription[0],'subtitle':Subtitle[0], 'data':Data[0]},
{'title':Title[1],'description':OpportunityDescription[0],'subtitle':Subtitle[0], 'data':Data[1]},
{'title':Title[2],'description':OpportunityDescription[0],'subtitle':Subtitle[0], 'data':Data[2]},
{'title':Title[1],'description':OpportunityDescription[0],'subtitle':Subtitle[0], 'data':Data[3]},
{'title':Title[1],'description':OpportunityDescription[0],'subtitle':Subtitle[0], 'data':Data[4]},
{'title':Title[3],'description':OpportunityDescription[0],'subtitle':Subtitle[0], 'data':Data[5]}];

const OpportunitySavedLayout = () => (
  <S.OpportunityList>
    <S.OpportunitiesSavedGrid>
    {opportunity.map(({title, description, subtitle, data}: Description) => (
        <Opportunity title={title} description={description} subtitle={subtitle} data={data} />
    ))}
    </S.OpportunitiesSavedGrid>
  </S.OpportunityList>
);

export default withErrorBoundary(OpportunitySavedLayout);