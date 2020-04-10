import React from 'react';
import {Heading2} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {Interface} from '../../../../styles';
import OpportunityFilters from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-filterComponents/OpportunityFilters/OpportunityFilters';

export const interfaceFilters: React.FC = () => (
  <Interface>
    <Heading2>Filters</Heading2>
    <hr />
    <OpportunityFilters />
  </Interface>
);
