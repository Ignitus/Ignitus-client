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
import { Heading6 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

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
          <S.Container>
            <S.HomeNavigationLeft>
              <N.NavigationLinkItem>
                <N.NavigationLink to="/#">Home</N.NavigationLink>
              </N.NavigationLinkItem>

              <N.NavigationLinkItem>
                <N.NavigationLink to="#">Opportunity</N.NavigationLink>
              </N.NavigationLinkItem>
            </S.HomeNavigationLeft>

            <S.HomeNavigationRight>
              <div style={{ margin: '0rem 1rem' }}>
                <SecondaryDropDown data={data} />
              </div>
              <S.HomeStyledIcon marginHorizontal name={AppIcon.MessageIcon} />
              <S.HomeStyledIcon
                marginHorizontal
                name={AppIcon.NotificationIcon}
              />
              <S.HomeNavigationItems>
                <S.HomeStyledIcon size="small" name={AppIcon.StudentIcon} />
                <Heading6> {name} </Heading6>
                <S.HomeStyledIcon
                  size="small"
                  name={AppIcon.FilledArrowDownIcon}
                />
              </S.HomeNavigationItems>
            </S.HomeNavigationRight>
          </S.Container>
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
          <S.Container>
            <S.HomeNavigationLeft>
              <N.NavigationLinkItem>
                <N.NavigationLink to="/#" />
              </N.NavigationLinkItem>

              <N.NavigationLinkItem>
                <N.NavigationLink to="#" />
              </N.NavigationLinkItem>
            </S.HomeNavigationLeft>

            <S.HomeNavigationRight>
              <div style={{ margin: '0rem 1rem' }}>
                <S.SkeletonSearchBar />
              </div>

              <S.SkeletonStyledIcon />
              <S.SkeletonStyledIcon />

              <S.HomeNavigationItems>
                <S.SkeletonDropdown />
              </S.HomeNavigationItems>
            </S.HomeNavigationRight>
          </S.Container>
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
