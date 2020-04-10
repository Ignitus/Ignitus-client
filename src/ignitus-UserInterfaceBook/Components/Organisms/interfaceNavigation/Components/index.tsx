import React from 'react';

import UserSettingsSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';
import MessageSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-MessageSideNavigation/Components';
import DashboardNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-DashboardSideNavigation/Components/index';

import { NavigationContainer, Container } from '../style';
import { Heading3 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceNavigation: React.FC = () => (
  <Container>
    <Heading3>Navigation</Heading3>
    <hr />
    <NavigationContainer>
      <DashboardNavigation />
      <UserSettingsSideNavigation />
      <MessageSideNavigation />
    </NavigationContainer>
  </Container>
);
