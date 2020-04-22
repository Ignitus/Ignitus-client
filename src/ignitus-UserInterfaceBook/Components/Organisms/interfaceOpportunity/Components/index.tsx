import React from 'react';

import Opportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';
import {Heading2} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {Interface} from '../../../../styles';

export const interfaceOpportunity: React.FC = () => (
  <Interface>
    <Heading2>Opportunity</Heading2>
    <hr />
    <Opportunity />
  </Interface>
);
