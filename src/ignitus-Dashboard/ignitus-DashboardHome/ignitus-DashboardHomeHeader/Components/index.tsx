/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as S from '../styles';
import {
  withErrorBoundary,
  AppIcon,
  useToggle,
} from '../../../../ignitus-Shared/index';
import * as N from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/styles';
import { SecondaryDropDown } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-secondaryDropDown/Components/index';
import { data } from '../constants';
import { Props } from '../types';

const DashBoardHomeHeader = ({ name, Skeleton }: Props) => {
  const [isExpanded, toogleIsExpanded] = useToggle(false);
  const userInformation: string | null = localStorage.getItem('data');
  let userType: string = '';

  if (localStorage.getItem('data') && typeof userInformation === 'string') {
    userType = JSON.parse(userInformation).userType;
  }

  return (
    <React.Fragment>
      {Skeleton ? (
        <N.Navigation transparentNavigation>
          <N.NavigationBarBrand to="/#">
            <N.Logo name={AppIcon.IgnitusLogo} />
          </N.NavigationBarBrand>

          <N.HomeNavigationLeft>
            <N.NavigationLinkItem>
              <N.NavigationLink to="/#">Home</N.NavigationLink>
            </N.NavigationLinkItem>

            <N.NavigationLinkItem>
              <N.NavigationLink to="#">Opportunity</N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationLeft>

          <N.HomeNavigationRight>
            <N.NavigationLinkItem>
              <N.NavigationLink to="#">
                <SecondaryDropDown data={data} />
              </N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>
          <N.HomeNavigationRight>
            <N.NavigationLinkItem>
              <N.NavigationLink to="/#">
                <N.HomeStyledIcon name={AppIcon.MessageIcon} />
              </N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>
          <N.HomeNavigationRight>
            <N.NavigationLinkItem>
              <N.NavigationLink to="/#">
                <N.HomeStyledIcon name={AppIcon.NotificationIcon} />
              </N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>

          <N.HomeNavigationRight>
            <N.NavigationLinkItem style={{ marginRight: '2rem' }}>
              <N.NavigationLink to="/#" style={{ marginRight: '0.5rem' }}>
                {userType === 'student' ? (
                  <N.HomeStyledIcon size="small" name={AppIcon.StudentIcon} />
                ) : (
                  <N.HomeStyledIcon size="small" name={AppIcon.ProfessorIcon} />
                )}
              </N.NavigationLink>
              <N.HomeNavigationItems>
                {name}
                <N.HomeStyledIcon
                  size="small"
                  name={AppIcon.KeyBoardArrowDown}
                />
              </N.HomeNavigationItems>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>
          <N.Burger
            onClick={toogleIsExpanded}
            name={AppIcon.KeyBoardArrowRight}
            isExpanded={isExpanded}
          />
        </N.Navigation>
      ) : (
        <N.Navigation transparentNavigation>
          <N.NavigationBarBrand to="/#">
            <N.Logo name={AppIcon.IgnitusLogo} />
          </N.NavigationBarBrand>
          <N.HomeNavigationLeft>
            <N.NavigationLinkItem>
              <N.NavigationLink to="/#" />
            </N.NavigationLinkItem>

            <N.NavigationLinkItem>
              <N.NavigationLink to="#" />
            </N.NavigationLinkItem>
          </N.HomeNavigationLeft>
          <N.HomeNavigationRight>
            <N.NavigationLinkItem>
              <N.NavigationLink to="#">
                <S.SkeletonSearchBar />
              </N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>
          <N.HomeNavigationRight>
            <N.NavigationLinkItem>
              <N.NavigationLink to="/#">
                <S.SkeletonStyledIcon />
              </N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>
          <N.HomeNavigationRight>
            <N.NavigationLinkItem>
              <N.NavigationLink to="/#">
                <S.SkeletonStyledIcon />
              </N.NavigationLink>
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>

          <N.HomeNavigationRight>
            <N.NavigationLinkItem style={{ marginRight: '2rem' }}>
              <S.SkeletonDropdown />
            </N.NavigationLinkItem>
          </N.HomeNavigationRight>
          <N.Burger
            onClick={toogleIsExpanded}
            name={AppIcon.KeyBoardArrowRight}
            isExpanded={isExpanded}
          />
        </N.Navigation>
      )}
    </React.Fragment>
  );
};

export default withErrorBoundary(DashBoardHomeHeader);
