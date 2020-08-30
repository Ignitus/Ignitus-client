import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { keyframes, css } from '@emotion/core';
import isValidProps from '@emotion/is-prop-valid';
import {
  White,
  SecondaryColor,
  IgnitusBlue,
  boxShadowColor,
} from '../../ignitus-Atoms/colors';
import { XS, SemiBold } from '../../ignitus-Atoms/fonts';
import { NavigationProps, ToggleProps } from './types';
import { Icon } from '../../../ignitus-Utilities/Components/icon';

export const Navigation = styled.nav<NavigationProps>`
  align-items: center;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: space-between;
  transition: background-color 300ms ease-in;
  background: ${props => (props.transparentNavigation ? 'transparent' : White)};
  box-shadow: ${props =>
    props.transparentNavigation ? 'none' : `0 2px 4px 0 ${boxShadowColor}`};
  padding: 0.5rem;
  @media only screen and (max-width: 1042px) {
    flex-direction: column;
    background: ${White};
  }
`;

export const NavigationBarBrand = styled(Link)`
  /* padding: 1rem; */
  align-self: stretch;
  width: max-content;
`;
export const Logo = styled(Icon)`
  width: 2.5rem;
  height: 2.5rem;
  path {
    fill: ${IgnitusBlue};
  }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
      to { opacity: 1; }
`;

const fadeOut = keyframes`
    from { opacity: 1; }
      to { opacity: 0; }
`;

export const NavigationLinks = styled.ul<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  @media only screen and (max-width: 1042px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: ${props => (props.isExpanded ? 'none' : 'flex')};
    animation: ${props =>
      props.isExpanded
        ? css`
            ${fadeOut} 2s ease
          `
        : css`
            ${fadeIn} 2s ease
          `};
  }
`;

export const NavigationLinkItem = styled.li<NavigationProps>`
  padding: 0rem 0.5rem;
  align-self: stretch;

  a {
    font-size: ${XS};
    font-weight: ${SemiBold};
    color: ${props => (props.transparentNavigation ? White : IgnitusBlue)};
    &:hover {
      color: ${SecondaryColor};
    }
  }

  @media only screen and (max-width: 1042px) {
    margin-left: 0rem;
    margin-bottom: 1rem;

    a {
      font-size: ${XS};
      font-weight: ${SemiBold};
      color: ${IgnitusBlue};
    }
  }
`;

export const StyledIcon = styled(Icon)``;
export const NavigationLink = styled(Link)``;

export const Burger = styled(Icon, { shouldForwardProp: isValidProps })<
  ToggleProps
>`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  display: none;
  cursor: pointer;
  width: 2rem;
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;

  @media only screen and (max-width: 1042px) {
    display: block;
    top: 1.2rem;
  }
`;

export const Fullscreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;
