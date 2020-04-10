import React from 'react';
import {Heading2} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {Interface} from '../../../../styles';
import {UserProfileCard} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-ProfileCard/Components/index';

export const interfaceFilters: React.FC = () => (
  <Interface>
    <Heading2>User Profile</Heading2>
    <hr />
    <UserProfileCard />
  </Interface>
);
