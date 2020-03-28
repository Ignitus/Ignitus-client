import React from 'react';
import { StyledHeading2 } from '../../../../styles';
import { CardLayoutContainer } from '../style';
import Opportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';

const interfaceOpportunity = () => (
  <CardLayoutContainer>
    <StyledHeading2>Card Layout ★</StyledHeading2>
    <hr />
    <Opportunity />
  </CardLayoutContainer>
);

export default interfaceOpportunity;
