import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {CardsContainer} from '../styles';
import {Card} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';

export const interfaceCards: React.FC = () => (
  <CardsContainer>
    <StyledHeading2>Cards</StyledHeading2>
    <hr />
    <Card>Card</Card>
  </CardsContainer>
);
