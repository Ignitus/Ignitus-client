import styled from '@emotion/styled';
import {HashLink} from 'react-router-hash-link';
import {keyframes, css} from '@emotion/core';
import {
  White,
  SecondaryColor,
  IgnitusBlue,
  Black,
  Red,
} from '../../ignitus-Atoms/colors';
import {XS, SemiBold} from '../../ignitus-Atoms/fonts';
import {NavigationProps, ToggleProps} from './types';
import Icon from '../../../ignitus-Utilities/Components/icon';

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
  padding: 0.5rem;
  @media only screen and (max-width: 1042px) {
    flex-direction: column;
    background: ${White};
  }
`;

export const NavigationBarBrand = styled(HashLink)`
  /* padding: 1rem; */
  align-self: stretch;
`;
export const Logo = styled(Icon)<NavigationProps>`
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
  padding: 0rem 1rem;
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

export const NavigationLink = styled(HashLink)``;

export const Burger = styled(Icon)<ToggleProps>`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  display: none;
  cursor: pointer;

  transform: ${props => (props.isExpanded ? 'rotate(0deg)' : 'rotate(90deg)')};
  transition: transform 200ms ease-in-out;

  @media only screen and (max-width: 1042px) {
    display: block;
    top: 1.2rem;
  }
`;
