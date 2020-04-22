import React from 'react';
import {Heading2, OpportunityFilters} from '../../../../../ignitus-Shared';
import {Interface} from '../../../../styles';

export const interfaceFilters: React.FC = () => (
  <Interface>
    <Heading2>Filters</Heading2>
    <hr />
    <OpportunityFilters />
  </Interface>
);
