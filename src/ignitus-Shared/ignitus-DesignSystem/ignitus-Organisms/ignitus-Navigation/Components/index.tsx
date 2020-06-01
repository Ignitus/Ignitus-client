/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavigationProps } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { useToggle } from '../../../../ignitus-Utilities/reactHooks/toogleHook';

import * as N from '../styles';
import {
  AuthenticatedNavigationItemsList,
  NonAuthenticatedNavigationItemsList,
} from '../constants';

const PureNavigation: React.FC<NavigationProps> = ({
  transparentNavigation,
}) => {
  const NavigationItemsList = localStorage.getItem('authenticated')
    ? AuthenticatedNavigationItemsList
    : NonAuthenticatedNavigationItemsList;
  const [isExpanded, toogleIsExpanded] = useToggle(true);
  return (
    <N.Navigation transparentNavigation={transparentNavigation}>
      <N.NavigationBarBrand to="/#">
        <N.Logo name={AppIcon.IgnitusLogo} />
      </N.NavigationBarBrand>
      <N.NavigationLinks isExpanded={isExpanded}>
        {NavigationItemsList.map(({ title, route }) => (
          <N.NavigationLinkItem
            key={title}
            transparentNavigation={transparentNavigation}
          >
            <N.NavigationLink to={route}>{title}</N.NavigationLink>
          </N.NavigationLinkItem>
        ))}
      </N.NavigationLinks>

      <N.Burger
        onClick={toogleIsExpanded}
        name={AppIcon.KeyBoardArrowRight}
        isExpanded={isExpanded}
      />
    </N.Navigation>
  );
};

const Navigation: React.FunctionComponent = () => {
  const [scrolling, setNavigationScrolled] = useState(false);
  const [transparentNavigation, setTransparentNavigation] = useState<boolean>(
    true,
  );

  useEffect(() => {
    const scrollFn = () => {
      const yAxis = window.scrollY;
      if (yAxis < 20) {
        if (scrolling === true) {
          setNavigationScrolled(false);
          setTransparentNavigation(true);
        }
      } else if (scrolling === false) {
        setNavigationScrolled(true);
        setTransparentNavigation(false);
      }
    };
    window.addEventListener('scroll', scrollFn, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  }, [scrolling]);

  return <PureNavigation transparentNavigation={transparentNavigation} />;
};

export const OptionalNavigation: React.FC<NavigationProps> = React.memo(
  ({ transparentNavigation = false }) => {
    if (!transparentNavigation) {
      return <PureNavigation transparentNavigation={transparentNavigation} />;
    }
    return <Navigation />;
  },
);
