import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Notfound } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import { KitSideNavigation } from '../../ignitus-UserInterfaceKit/Components/InterfaceSideNavigation/Components';
import { interfaceButttons } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceButtons/Components';
import { interfaceNavigation } from '../../ignitus-UserInterfaceKit/Components/Organisms/Navigation/Components';
import { interfaceIcons } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceIcons/Components';
import { interfaceTypography } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceTypography/Components';
import { interfaceCards } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceCards/Components';


const Container = styled.div`
  display:flex;
  flex-direction: row;
`;
// eslint-disable-next-line import/prefer-default-export
const UserInterfaceKitRoutes = () => (
  <Container>
    <KitSideNavigation />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Notfound />
        )}
      />
      <Route
        path="/interface/buttons"
        component={interfaceButttons}
      />
      <Route
        path="/interface/sideNavigation"
        component={interfaceNavigation}
      />
      <Route
        path="/interface/icons"
        component={interfaceIcons}
      />
      <Route
        path="/interface/typography"
        component={interfaceTypography}
      />
      <Route
        path="/interface/cards"
        component={interfaceCards}
      />
    </Switch>
  </Container>
);

export default UserInterfaceKitRoutes;
