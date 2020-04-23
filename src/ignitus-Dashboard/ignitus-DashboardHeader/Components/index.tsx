/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {Redirect} from 'react-router-dom';
import {withErrorBoundary, AppIcon, useToggle} from '../../../ignitus-Shared';
import * as N from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/styles';

const DashBoardNavigation: React.FC = ({logUserOut}: any) => {
  const logout = () => {
    logUserOut();
    localStorage.clear();
    return <Redirect to="/" />;
  };

  const [isExpanded, toogleIsExpanded] = useToggle(false);
  let userInformation: string | null = localStorage.getItem('data');
  let userEmail: string = '';

  if (localStorage.getItem('data') && typeof userInformation === 'string') {
    userEmail = JSON.parse(userInformation).email;
  }

  return (
    <N.Navigation>
      <N.NavigationBarBrand to="/#">
        <N.Logo name={AppIcon.IgnitusLogo} />
      </N.NavigationBarBrand>

      <N.NavigationLinks isExpanded={isExpanded}>
        <N.NavigationLinkItem>
          <N.NavigationLink to="/#">
            Home
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem>
          <N.NavigationLink to="#">{userEmail}</N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem onClick={logout}>
          <N.NavigationLink to="#">Logout</N.NavigationLink>
        </N.NavigationLinkItem>
      </N.NavigationLinks>

      <N.Burger
        onClick={toogleIsExpanded}
        name={AppIcon.KeyBoardArrowRight}
        isExpanded={isExpanded}
      />
    </N.Navigation>
  );
};

export default withErrorBoundary(DashBoardNavigation);
