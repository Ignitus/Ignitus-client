import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Notfound } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import { KitSideNavigation } from '../../ignitus-UserInterfaceKit/InterfaceSideNavigation/Components';
import { interfaceButttons } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceButtons/Components';
import { interfaceNavigation } from '../../ignitus-UserInterfaceKit/Components/Organisms/interfaceNavigation/Components';
import { interfaceIcons } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceIcons/Components';
import { interfaceInputs } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceInputs/Components';
import { interfaceTypography } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceTypography/Components';
import { interfaceCards } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceCards/Components';
import { interfaceCardLayout } from '../../ignitus-UserInterfaceKit/Components/Organisms/interfaceCardLayout/Components';
import { interfaceNotFound } from '../../ignitus-UserInterfaceKit/Components/Layouts/interfaceNotFound/Components';
import { interfaceUnderConstruction } from '../../ignitus-UserInterfaceKit/Components/Layouts/interfaceUnderConstruction/Components';
import { interfaceColors } from '../../ignitus-UserInterfaceKit/Components/Atoms/interfaceColors/Components';


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
        path="/interface/inputFields"
        component={interfaceInputs}
      />
      <Route
        path="/interface/typography"
        component={interfaceTypography}
      />
      <Route
        path="/interface/cards"
        component={interfaceCards}
      />
      <Route
        path="/interface/cardLayout"
        component={interfaceCardLayout}
      />
      <Route
        path="/interface/notFound"
        component={interfaceNotFound}
      />
      <Route
        path="/interface/underConstruction"
        component={interfaceUnderConstruction}
      />

      <Route
        path="/interface/colors"
        component={interfaceColors}
      />
    </Switch>
  </Container>
);

export default UserInterfaceKitRoutes;
