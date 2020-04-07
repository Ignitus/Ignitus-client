/* eslint-disable import/extensions */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from '@emotion/styled';
import {Notfound} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import {interfaceButttons} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceButtons/Components';
import {interfaceNavigation} from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceNavigation/Components';
import {interfaceIcons} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceIcons/Components';
import {interfaceTypography} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceTypography/Components';
import {interfaceCards} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceCards/Components';
import {interfaceNotFound} from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceNotFound/Components';
import {interfaceUnderConstruction} from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceUnderConstruction/Components';
import {interfaceColors} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceColors/Components';
import {InterfaceSideNavigation} from '../../ignitus-UserInterfaceBook/InterfaceSideNavigation/Components';
import {interfaceDropDown} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceDropDown/Components';
import {interfaceCheckBox} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceCheckBox/Components';
import {interfaceInput} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceInput/Components';
import {interfaceOpportunity} from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceOpportunity/Components';
import {interfaceSavedOpportunity} from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceSavedOpportunity/Components';
import {interfaceSearchInput} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceSearchInput/Components';
import {interfaceSeparator} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceSeparator/Components';
import {interfaceDashBoardFooter} from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceFooter/interfaceDashBoardFooter/Components';
import {interfaceIconInput} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceIconInput/Components';
import {interfaceMultiMediaInput} from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceMulti/Components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Reset = `
  @media (max-width: 420px) {
    height: auto;
    overflow: auto;
  }
`;

const RightRow = styled.div`
  flex: 1.5;
  height: 100vh;
  overflow-y: overlay;
  overflow-x: auto;
  ${Reset}
  @media (min-width: 1466px) {
    flex: 1;
  }
`;

const LeftRow = styled.div`
  flex: 5;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  ${Reset}
`;

// eslint-disable-next-line import/prefer-default-export
const UserInterfaceBookRoutes: React.FunctionComponent = () => (
  <Container>
    <RightRow>
      <InterfaceSideNavigation />
    </RightRow>

    <LeftRow>
      <Switch>
        <Route exact path="/" render={() => <Notfound />} />
        <Route path="/interface/buttons" component={interfaceButttons} />
        <Route
          path="/interface/sideNavigation"
          component={interfaceNavigation}
        />
        <Route path="/interface/icons" component={interfaceIcons} />
        <Route path="/interface/typography" component={interfaceTypography} />
        <Route path="/interface/cards" component={interfaceCards} />
        <Route
          path="/interface/opportunityPosted"
          component={interfaceOpportunity}
        />
        <Route path="/interface/notFound" component={interfaceNotFound} />
        <Route
          path="/interface/underConstruction"
          component={interfaceUnderConstruction}
        />

        <Route path="/interface/colors" component={interfaceColors} />

        <Route
          path="/interface/defaultDropdown"
          component={interfaceDropDown}
        />

        <Route
          path="/interface/defaultCheckbox"
          component={interfaceCheckBox}
        />

        <Route path="/interface/primaryInput" component={interfaceInput} />

        <Route
          path="/interface/opportunitySaved"
          component={interfaceSavedOpportunity}
        />

        <Route path="/interface/searchInput" component={interfaceSearchInput} />

        <Route
          path="/interface/defaultIconInput"
          component={interfaceIconInput}
        />
        <Route
          path="/interface/defaultMultiMediaInput"
          component={interfaceMultiMediaInput}
        />

        <Route path="/interface/seperators" component={interfaceSeparator} />

        <Route
          path="/interface/dashBoardFooter"
          component={interfaceDashBoardFooter}
        />
      </Switch>
    </LeftRow>
  </Container>
);

export default UserInterfaceBookRoutes;
