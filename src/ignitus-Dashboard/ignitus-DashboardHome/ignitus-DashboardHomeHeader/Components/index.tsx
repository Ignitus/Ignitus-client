/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {
  withErrorBoundary,
  AppIcon,
  useToggle,
} from '../../../../ignitus-Shared/index';
import * as N from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/styles';
import { SecondaryDropDown } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-secondaryDropDown/Components/index';
import { data } from '../constants';
import { Props } from '../types';

const DashBoardHomeHeader = ({ name }: Props) => {
  const [isExpanded, toogleIsExpanded] = useToggle(false);
  const userInformation: string | null = localStorage.getItem('data');
  let userType: string = '';

  if (localStorage.getItem('data') && typeof userInformation === 'string') {
    userType = JSON.parse(userInformation).userType;
  }

  return (
    <N.Navigation>
      <N.NavigationBarBrand to="/#">
        <N.Logo name={AppIcon.IgnitusLogo} />
      </N.NavigationBarBrand>

      <N.NavItems2>
        <N.NavigationLinkItem>
          <N.NavigationLink to="/#">Home</N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem>
          <N.NavigationLink to="#">Internships</N.NavigationLink>
        </N.NavigationLinkItem>
      </N.NavItems2>

      <N.NavItems>
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

        <N.NavigationLinkItem>
          <N.NavigationLink to="#">
            <N.StyledIcon name={AppIcon.NotificationIcon} />
          </N.NavigationLink>
        </N.NavigationLinkItem>
      </N.NavItems>

      <N.NavItems>
        <N.NavigationLinkItem>
          <N.NavigationLink to="/#">
            {userType === 'student' ? (
              <N.StyledIcon name={AppIcon.StudentIcon} />
            ) : (
              <N.StyledIcon name={AppIcon.ProfessorIcon} />
            )}
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem>
          <N.NavigationLink to="#">{name}</N.NavigationLink>
        </N.NavigationLinkItem>
        <N.NavigationLinkItem>
          <N.NavigationLink to="#">
            <N.StyledIcon name={AppIcon.KeyBoardArrowDown} />
          </N.NavigationLink>
        </N.NavigationLinkItem>
      </N.NavItems>
      <N.Burger
        onClick={toogleIsExpanded}
        name={AppIcon.KeyBoardArrowRight}
        isExpanded={isExpanded}
      />
    </N.Navigation>
  );
};

export default withErrorBoundary(DashBoardHomeHeader);
