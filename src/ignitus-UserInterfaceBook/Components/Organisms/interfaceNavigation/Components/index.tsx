import React from 'react';

import UserSettingsSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';
import MessageSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-MessageSideNavigation/Components';
import DashboardNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-DashboardSideNavigation/Components/index';

import { NavigationContainer } from '../style';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
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
