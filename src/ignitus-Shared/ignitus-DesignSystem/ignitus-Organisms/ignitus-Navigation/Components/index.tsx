/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import logo from '../../../ignitus-Assets/ignitus-Logos/logo-Svg/ignitusBlueLogo.svg';
import blackLogo from '../../../ignitus-Assets/ignitus-Logos/logo-Svg/ignitusBlackLogo.svg';

import {
  PureNavigationProps,
  displayClassTypes,
  NavigationProps,
} from '../types';

import '../Styles/style.scss';

import * as N from '../styles';
import useToggle from '../../../../ignitus-Utilities/reactHooks/toogleHook';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';

const PureNavigation: React.FC<PureNavigationProps> = ({
  displayClass,
  dynamicLogo,
}) => {
  const [isExpanded, toogleIsExpanded] = useToggle(false);
  return (
    <nav className={`navbar  ${displayClass}`}>
      <N.NavBarBrand to="/#">
        <N.Logo src={dynamicLogo} alt="logo" />
      </N.NavBarBrand>

      <N.NavLinks isExpanded={isExpanded}>
        <N.NavLinkItem>
          <HashLink smooth to="/#" className="navlink">
            Home
          </HashLink>
        </N.NavLinkItem>

        <N.NavLinkItem>
          <HashLink smooth to="/#what-we-do" className="navlink">
            What we provide?
          </HashLink>
        </N.NavLinkItem>

        <N.NavLinkItem>
          <HashLink smooth to="/#contributors" className="navlink">
            Contributors
          </HashLink>
        </N.NavLinkItem>

        <N.NavLinkItem>
          <Link to="/aboutus" className="navlink">
            About
          </Link>
        </N.NavLinkItem>

        <N.NavLinkItem>
          <a
            className="navlink"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.ly/2SaYXMO"
          >
            Join
          </a>
        </N.NavLinkItem>

        <N.NavLinkItem>
          <Link to="/Login" className="navlink">
            Sign in
          </Link>
        </N.NavLinkItem>

        <N.NavLinkItem>
          <Link to="/Signup" className="navlink">
            Sign up
          </Link>
        </N.NavLinkItem>
      </N.NavLinks>

      <N.Burger
        onClick={toogleIsExpanded}
        name={AppIcon.Chevron}
        isExpanded={isExpanded}
      />
    </nav>
  );
};

const Navigation: React.FunctionComponent = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [displayClass, setDisplayClass] = useState<displayClassTypes>(
    'transparent',
  );
  const [dynamicLogo, setDynamicLogo] = useState(blackLogo);

  useEffect(() => {
    const scrollFn = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        if (navScrolled === true) {
          setNavScrolled(false);
          setDisplayClass('transparent');
          setDynamicLogo(blackLogo);
        }
      } else if (navScrolled === false) {
        setNavScrolled(true);
        setDisplayClass('whitenav');
        setDynamicLogo(logo);
      }
    };
    window.addEventListener('scroll', scrollFn, {passive: true});
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  }, [navScrolled]);

  return (
    <PureNavigation displayClass={displayClass} dynamicLogo={dynamicLogo} />
  );
};

export const OptionalNavigation: React.FC<NavigationProps> = React.memo(
  ({dynamicNavigation = false}) => {
    if (!dynamicNavigation)
      return <PureNavigation displayClass="whitenav" dynamicLogo={logo} />;
    return <Navigation />;
  },
);
