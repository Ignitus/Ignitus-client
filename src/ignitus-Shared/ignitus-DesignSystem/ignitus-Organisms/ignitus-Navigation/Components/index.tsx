/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../ignitus-Assets/ignitus-Logos/logo-Svg/ignitusBlueLogo.svg';
import blackLogo from '../../../ignitus-Assets/ignitus-Logos/logo-Svg/ignitusBlackLogo.svg';

import {PureNavigationProps, NavigationProps} from '../types';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';

import * as N from '../styles';
import {useToggle} from '../../../../ignitus-Utilities/reactHooks/toogleHook';

const PureNavigation: React.FC<PureNavigationProps> = ({
  transparentNavigation,
  dynamicLogo,
}) => {
  const [isExpanded, toogleIsExpanded] = useToggle(false);
  return (
    <N.Navigation transparentNavigation={transparentNavigation}>
      <N.NavigationBarBrand to="/#">
        <N.Logo src={dynamicLogo} alt="logo" />
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
          <N.NavigationLink smooth to="/#contributors">
            Contributors
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
          <Link to="/Login" className="navlink">
            Sign in
          </Link>
        </N.NavigationLinkItem>

        <N.NavigationLinkItem transparentNavigation={transparentNavigation}>
          <Link to="/Signup" className="navlink">
            Sign up
          </Link>
        </N.NavigationLinkItem>
      </N.NavigationLinks>

      <N.Burger
        onClick={toogleIsExpanded}
        name={AppIcon.Chevron}
        isExpanded={isExpanded}
      />
    </N.Navigation>
  );
};

const Navigation: React.FunctionComponent = () => {
  const [navigationScrolled, setNavigationScrolled] = useState(false);
  const [transparentNavigation, setTransparentNavigation] = useState<boolean>(
    true,
  );
  const [dynamicLogo, setDynamicLogo] = useState(blackLogo);

  useEffect(() => {
    const scrollFn = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        if (navigationScrolled === true) {
          setNavigationScrolled(false);
          setTransparentNavigation(true);
          setDynamicLogo(blackLogo);
        }
      } else if (navigationScrolled === false) {
        setNavigationScrolled(true);
        setTransparentNavigation(false);
        setDynamicLogo(logo);
      }
    };
    window.addEventListener('scroll', scrollFn, {passive: true});
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  }, [navigationScrolled]);

  return (
    <PureNavigation
      transparentNavigation={transparentNavigation}
      dynamicLogo={dynamicLogo}
    />
  );
};

export const OptionalNavigation: React.FC<NavigationProps> = React.memo(
  ({transparentNavigation = false}) => {
    if (!transparentNavigation)
      return (
        <PureNavigation transparentNavigation={transparentNavigation} dynamicLogo={logo} />
      );
    return <Navigation />;
  },
);
