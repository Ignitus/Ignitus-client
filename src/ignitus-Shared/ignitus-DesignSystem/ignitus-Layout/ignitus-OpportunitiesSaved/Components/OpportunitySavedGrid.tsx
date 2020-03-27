import React from 'react';
import * as S from '../style';
import  OpportunitySavedCard  from '../../../ignitus-Organisms/ignitus-OpportunitySaved/Components/OpportunitySaved';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import {opportunity} from '../constants';
import universityOfMelbourne from '../../../ignitus-Assets/ignitus-Images/img-Png/universityOfMelbourne.png';
import {Description} from '../../../ignitus-Organisms/ignitus-OpportunitySaved/types';

export const OpportunitySavedLayout = () => (
  <S.OpportunityList>
    <S.OpportunitiesSavedGrid>
    {opportunity.map(({title, description, subtitle, data}: Description) => (
        <OpportunitySavedCard title={title} description={description} subtitle={subtitle} data={universityOfMelbourne} />
    ))}
    </S.OpportunitiesSavedGrid>
  </S.OpportunityList>
);

export default withErrorBoundary(OpportunitySavedLayout);