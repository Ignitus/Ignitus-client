import React from 'react';
import {StyledHeading2, Interface} from '../../../../styles';
import {Card} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';

export const interfaceCards: React.FC = () => (
  <Interface>
    <StyledHeading2>Cards</StyledHeading2>
    <hr />
    <Card>Card</Card>
  </Interface>
);
