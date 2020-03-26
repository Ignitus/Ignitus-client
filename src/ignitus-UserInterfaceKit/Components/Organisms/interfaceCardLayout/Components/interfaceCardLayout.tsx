import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {CardLayoutContainer, OpportunitySaved} from '../style';
import tohokuUniversity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/tohokuUniversity.png'
import {OpportunitySavedCard} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OpportunitySaved/Components/OpportunitySaved'
import Opportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';

const interfaceCardLayout = () => (
  <CardLayoutContainer>
    <StyledHeading2>Card Layout ★</StyledHeading2>
    <hr />
    <Opportunity />
    <OpportunitySaved>
    <OpportunitySavedCard title="Funded Research" description="Church and civil courts in late medieval and early modern Scotland" subtitle="By the University of Melbourne" data={tohokuUniversity}/>
    </OpportunitySaved>
  </CardLayoutContainer>
);

export default interfaceCardLayout;
