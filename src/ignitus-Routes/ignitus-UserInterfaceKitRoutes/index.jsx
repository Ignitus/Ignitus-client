import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Notfound } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import { KitSideNavigation } from '../../ignitus-UserInterfaceKit/Components/KitSideNavigation/Components';
import { Buttons } from '../../ignitus-UserInterfaceKit/Components/Atoms/Buttons/Components';


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
        component={Buttons}
      />
      <Route
        path="/interface/navigation"
        component={Buttons}
      />
    </Switch>
  </Container>
);

export default UserInterfaceKitRoutes;
