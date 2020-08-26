import React from 'react';
import { InfoCard } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OpportunitySideCard/Components';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared';

export const interfaceOpportunitySideCard = () => (
  <Interface>
    <Heading2>Opportunity Side Card</Heading2>
    <hr />
    <InfoCard location="Australia" commitment="Full-time" salary="24" />
  </Interface>
);
