/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as S from '../styles';
import {
  withErrorBoundary,
  AppIcon,
  useToggle,
} from '../../../../ignitus-Shared/index';
import * as N from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/styles';
import { Props } from '../types';
import { Heading6 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

const DashBoardHomeHeader = ({ name, Skeleton }: Props) => {
  const [isExpanded, toogleIsExpanded] = useToggle(false);
  const handleChange = () => console.log('');
  return (
    <React.Fragment>
      {Skeleton === false ? (
        <N.Navigation>
          <N.NavigationBarBrand to="/#">
            <N.Logo name={AppIcon.IgnitusLogo} marginHorizontal />
          </N.NavigationBarBrand>
          <S.Container>
            <S.HomeNavigationLeft>
              <N.NavigationLinkItem>
                <N.NavigationLink to="/#">
                  <div className="home">Home</div>
                </N.NavigationLink>
              </N.NavigationLinkItem>

              <N.NavigationLinkItem>
                <N.NavigationLink to="#">
                  {' '}
                  <div className="home">Opportunity</div>
                </N.NavigationLink>
              </N.NavigationLinkItem>
            </S.HomeNavigationLeft>

            <S.HomeNavigationRight>
              <S.SearchBar
                state=""
                placeholder="Search @user, #tags ..."
                type="text"
                name={AppIcon.SearchIcon}
                handleChange={handleChange}
              />
              <S.HomeStyledIcon
                marginHorizontal
                name={AppIcon.FilledMessageIcon}
              />
              <S.HomeStyledIcon
                marginHorizontal
                name={AppIcon.NotificationIcon}
              />
              <S.HomeNavigationItems
                style={{ marginRight: '2rem', cursor: 'pointer' }}
              >
                <S.HomeStyledIcon size="small" name={AppIcon.StudentIcon} />
                <Heading6> {name} </Heading6>
                <S.HomeStyledIcon name={AppIcon.FilledArrowDownIcon} />
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
        <N.Navigation>
          <N.NavigationBarBrand to="/#">
            <N.Logo name={AppIcon.IgnitusLogo} marginHorizontal />
          </N.NavigationBarBrand>
          <S.Container>
            <S.HomeNavigationLeft>
              <N.NavigationLinkItem />

              <N.NavigationLinkItem />
            </S.HomeNavigationLeft>

            <S.HomeNavigationRight>
              <S.SkeletonSearchBar />

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
