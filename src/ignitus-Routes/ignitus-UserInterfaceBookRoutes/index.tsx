/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Notfound } from '../../ignitus-Shared';
import { interfaceButttons } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceButtons/Components';
import { interfaceNavigation } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceNavigation/Components';
import { interfaceIcons } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceIcons/Components';
import { interfaceLoader } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceLoader/Components';
import { interfaceTypography } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceTypography/Components';
import { interfaceCards } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceCards/Components';
import { interfaceNotFound } from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceNotFound/Components';
import { interfaceUnderConstruction } from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceUnderConstruction/Components';
import { interfaceColors } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceColors/Components';
import { InterfaceSideNavigation } from '../../ignitus-UserInterfaceBook/InterfaceSideNavigation/Components';
import { interfaceDropDown } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceDropDown/Components';
import { interfaceCheckBox } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceCheckBox/Components';
import { interfaceInput } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceInput/Components';
import { interfaceOpportunityList } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceOpportunityList/Components';
import { interfaceSavedOpportunity } from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceSavedOpportunity/Components';
import { interfaceMessageCard } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceMessageCard/Components';
import { interfaceDeleteFinal } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceDeleteFinal/Components';
import { interfaceDeleteAccount } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceDeleteAccount/Components';
import { interfaceMessageDetail } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceMessageDetail/Components';
import { interfaceSearchInput } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceSearchInput/Components';
import { interfaceSeparator } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceSeparator/Components';
import { interfaceDashBoardFooter } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceFooter/interfaceDashBoardFooter/Components';
import { interfaceIconInput } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceIconInput/Components';
import { interfaceMultiMediaInput } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceMulti/Components';
import { interfaceModalHooray } from '../../ignitus-UserInterfaceBook/Components/Molecules/interfaceModalHooray/Components';
import { interfaceModalShare } from '../../ignitus-UserInterfaceBook/Components/Molecules/interfaceModalShare/Components';
import { interfaceModalApply } from '../../ignitus-UserInterfaceBook/Components/Molecules/interfaceModalApply/Components';
import { interfaceOverlay } from '../../ignitus-UserInterfaceBook/Components/Molecules/interfaceOverlay/Components';
import { interfaceTags } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceTags/Components';
import { interfaceFilters } from '../../ignitus-UserInterfaceBook/Components/Templates/interfaceFilters/Components/index';
import { interfaceUserProfile } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceUserProfile/Components';
import { InterfaceAvatar } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceAvatar/Components';
import { interfaceSideProfile } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceSideProfile/Components/index';
import { InterfaceNotifications } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceNotifications/Components/index';
import { InterfaceProgress } from '../../ignitus-UserInterfaceBook/Components/Templates/interfaceProgress/index';
import { interfaceSecondaryDropDown } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceSecondaryDropdown/Components';
import { interfaceScrollBar } from '../../ignitus-UserInterfaceBook/Components/Molecules/interfaceScrollBar/Components';
import { interfaceToggleButtons } from '../../ignitus-UserInterfaceBook/Components/Molecules/interfaceToggleButtons/Components';
import { interfaceDashboardNavigationDropdown } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceNavDropdown/Components';
import { interfaceOpportunitySideCard } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceOpportunitySideCard/Components';

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
export const UserInterfaceBookRoutes: React.FunctionComponent = () => (
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
        <Route path="/interface/loader" component={interfaceLoader} />
        <Route path="/interface/typography" component={interfaceTypography} />
        <Route path="/interface/cards" component={interfaceCards} />
        <Route
          path="/interface/opportunityPosted"
          component={interfaceOpportunityList}
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
          path="/interface/secondaryDropdown"
          component={interfaceSecondaryDropDown}
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
        <Route
          path="/interface/opportunitySideCard"
          component={interfaceOpportunitySideCard}
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

        <Route path="/interface/tags" component={interfaceTags} />

        <Route
          path="/interface/dashBoardFooter"
          component={interfaceDashBoardFooter}
        />
        <Route path="/interface/filters" component={interfaceFilters} />
        <Route path="/interface/userProfile" component={interfaceUserProfile} />
        <Route path="/interface/modalHooray" component={interfaceModalHooray} />
        <Route path="/interface/modalShare" component={interfaceModalShare} />
        <Route path="/interface/modalApply" component={interfaceModalApply} />
        <Route path="/interface/overlay" component={interfaceOverlay} />
        <Route path="/interface/scrollBar" component={interfaceScrollBar} />
        <Route
          path="/interface/toggleButtons"
          component={interfaceToggleButtons}
        />
        <Route
          path="/interface/dashboardNavigationDropdown"
          component={interfaceDashboardNavigationDropdown}
        />
        <Route path="/interface/avatar" component={InterfaceAvatar} />
        <Route path="/interface/sideProfile" component={interfaceSideProfile} />
        <Route path="/interface/progress" component={InterfaceProgress} />
        <Route
          path="/interface/notifications"
          component={InterfaceNotifications}
        />
        <Route path="/interface/messageCard" component={interfaceMessageCard} />
        <Route path="/interface/deleteFinal" component={interfaceDeleteFinal} />
        <Route
          path="/interface/deleteAccount"
          component={interfaceDeleteAccount}
        />
        <Route
          path="/interface/messageDetail"
          component={interfaceMessageDetail}
        />
      </Switch>
    </LeftRow>
  </Container>
);
