/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Redirect } from 'react-router-dom';
import {
  withErrorBoundary,
  AppIcon,
  useToggle,
} from '../../../../ignitus-Shared/index';
import * as N from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/styles';
import { SecondaryDropDown } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-secondaryDropDown/Components/index';
import { data } from '../constants';

const DashBoardHomeHeader: React.FC = ({ logUserOut }: any) => {
  const logout = () => {
    logUserOut();
    localStorage.clear();
    return <Redirect to="/" />;
  };

  const [isExpanded, toogleIsExpanded] = useToggle(false);
  const userInformation: string | null = localStorage.getItem('data');
  console.log(userInformation);
  let userEmail: string = '';
  let userType: string = '';

  if (localStorage.getItem('data') && typeof userInformation === 'string') {
    userEmail = JSON.parse(userInformation).email;
    userType = JSON.parse(userInformation).userType;
  }

  return (
    <N.Navigation>
      <N.NavigationLinks isExpanded={isExpanded}>
        <N.NavigationBarBrand to="/#">
          <N.Logo name={AppIcon.IgnitusLogo} />
        </N.NavigationBarBrand>

        <N.NavigationLinkItem>
          <N.NavigationLink to="/#">Home</N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem onClick={logout}>
          <N.NavigationLink to="#">Internships</N.NavigationLink>
        </N.NavigationLinkItem>
      </N.NavigationLinks>

      <N.NavigationLinks isExpanded={isExpanded}>
        <N.NavigationLinkItem>
          <N.NavigationLink to="#">
            <SecondaryDropDown data={data} />
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem>
          <N.NavigationLink to="/#">
            <N.StyledIcon name={AppIcon.MessageIcon} />
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem onClick={logout}>
          <N.NavigationLink to="#">
            <N.StyledIcon name={AppIcon.NotificationIcon} />
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem>
          <N.NavigationLink to="/#">
            {userType === 'student' ? (
              <N.StyledIcon name={AppIcon.StudentIcon} />
            ) : (
              <N.StyledIcon name={AppIcon.ProfessorIcon} />
            )}
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem onClick={logout}>
          <N.NavigationLink to="#">DropDown</N.NavigationLink>
        </N.NavigationLinkItem>

        <N.Burger
          onClick={toogleIsExpanded}
          name={AppIcon.KeyBoardArrowRight}
          isExpanded={isExpanded}
        />
      </N.NavigationLinks>
    </N.Navigation>
  );
};

export default withErrorBoundary(DashBoardHomeHeader);
