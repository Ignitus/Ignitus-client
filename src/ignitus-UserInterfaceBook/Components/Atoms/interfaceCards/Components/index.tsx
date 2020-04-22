import React from 'react';
import { Interface } from '../../../../styles';
import { Card } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceCards: React.FC = () => (
  <Interface>
    <Heading2>Cards</Heading2>
    <hr />
    <Card>Card</Card>
  </Interface>
);
