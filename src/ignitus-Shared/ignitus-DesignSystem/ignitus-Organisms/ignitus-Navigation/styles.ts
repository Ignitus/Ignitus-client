import styled from '@emotion/styled';
import {HashLink} from 'react-router-hash-link';
import Icon from '../../../ignitus-Utilities/Components/icon';
import {keyframes, css} from '@emotion/core';

type ToggleProps = {
  isExpanded: boolean;
};

export const NavBarBrand = styled(HashLink)`
  padding: 0rem 1rem;
  align-self: stretch;
`;
export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const fadeIn = keyframes`
    from { opacity: 0; }
      to { opacity: 1; }
`;

const fadeOut = keyframes`
    from { opacity: 1; }
      to { opacity: 0; }
`;

export const NavLinks = styled.ul<ToggleProps>`
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

export const NavLinkItem = styled.li`
  padding: 0rem 1rem;
  align-self: stretch;

  @media only screen and (max-width: 1042px) {
    margin-left: 0rem;
    margin-bottom: 1rem;
  }
`;

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
