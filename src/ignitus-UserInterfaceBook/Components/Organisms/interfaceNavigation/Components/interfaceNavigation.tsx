import React from 'react';
import UserSettingsSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';
import MessageSideNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-MessageSideNavigation/Components';
import {NavigationContainer, Container} from '../style';
import DashboardNavigation from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-DashboardSideNavigation/Components/index';
import {StyledHeading2} from '../../../../styles';
const interfaceNavigation = () => (
  <Container>
    <StyledHeading2>Navigation</StyledHeading2>
    <hr />
    <NavigationContainer>
      <DashboardNavigation />
      <UserSettingsSideNavigation />
      <MessageSideNavigation />
    </NavigationContainer>
  </Container>
);

export default interfaceNavigation;
