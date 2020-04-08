import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {CardLayoutContainer} from '../style';
import OpportunityFilters from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-filterComponents/OpportunityFilters/OpportunityFilters';

const interfaceOpportunity: React.FC = () => (
  <CardLayoutContainer>
    <StyledHeading2>Opportunity Search Filter </StyledHeading2>
    <OpportunityFilters/>
  </CardLayoutContainer>
);

export default interfaceOpportunity;
