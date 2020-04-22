import React from 'react';

import {
  UserSettingsSideNavigation,
  MessageSideNavigation,
  DashboardNavigation,
  Heading2,
} from '../../../../../ignitus-Shared';

import { NavigationContainer } from '../style';
import { Interface } from '../../../../styles';

export const interfaceNavigation: React.FC = () => (
  <Interface>
    <Heading2>Navigation</Heading2>
    <hr />
    <NavigationContainer>
      <DashboardNavigation />
      <UserSettingsSideNavigation />
      <MessageSideNavigation />
    </NavigationContainer>
  </Interface>
);
