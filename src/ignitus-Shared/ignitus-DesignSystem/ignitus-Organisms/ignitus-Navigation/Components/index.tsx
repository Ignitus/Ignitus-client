/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import { NavigationProps } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { useToggle } from '../../../../ignitus-Utilities/reactHooks/toogleHook'; 

import * as N from '../styles';

const PureNavigation: React.FC<NavigationProps> = ({
  transparentNavigation,
}) => {
  const [isExpanded, toogleIsExpanded] = useToggle(false);
  return (
    <N.Navigation transparentNavigation={transparentNavigation}>
      <N.NavigationBarBrand to="/#">
        <N.Logo name={AppIcon.IgnitusLogo} transparentNavigation={transparentNavigation} />
      </N.NavigationBarBrand>

      <N.NavigationLinks isExpanded={isExpanded}>
        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <N.NavigationLink smooth to="/#">
            Home
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <N.NavigationLink smooth to="/#what-we-do">
            What we provide?
          </N.NavigationLink>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <Link to="/aboutus">About</Link>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.ly/2SaYXMO"
          >
            Join
          </a>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <Link to="/login" className="navlink">
            Sign in
          </Link>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <Link to="/signup" className="navlink">
            Sign up
          </Link>
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
    window.addEventListener('scroll', scrollFn, {passive: true});
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  }, [scrolling]);

  return (
    <PureNavigation
      transparentNavigation={transparentNavigation}
    />
  );
};

export const OptionalNavigation: React.FC<NavigationProps> = React.memo(
  ({transparentNavigation = false}) => {
    if (!transparentNavigation)
      return (
        <PureNavigation
          transparentNavigation={transparentNavigation}
        />
      );
    return <Navigation />;
  },
);
