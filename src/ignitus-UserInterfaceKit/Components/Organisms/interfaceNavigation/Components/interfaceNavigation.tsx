import React from 'react';
import UserSettingsSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';
import MessageSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-MessageSideNavigation/Components';
import {NavigationContainer} from '../style';
import DashboardNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-DashboardSideNavigation/Components/index';
const interfaceNavigation = () => (
  <NavigationContainer>
    <DashboardNavigation />
    <UserSettingsSideNavigation />
    <MessageSideNavigation />
  </NavigationContainer>
);

export default interfaceNavigation;
