import styled from '@emotion/styled';
import {Heading3} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import Icon from '../../ignitus-Shared/ignitus-Utilities/Components/icon';
import {flexibleRowDiv} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import {
  XL,
  SM,
  Normal,
  Medium,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

type ArrowProps = {
  isexpanded: boolean;
  nesting?: boolean;
};

type SubNestingProps = {
  nesting?: boolean;
  level: number;
};

export const NavigationContainer = styled.nav`
  width: 18rem;
  padding: 2rem;
  background: ${C.GreyLight};
`;

export const Heading = styled(Heading3)<SubNestingProps>`
  font-size: ${props => (props.nesting ? SM : XL)};
  color: ${props => (props.nesting ? C.GreyText : C.IgnitusBlue)};
  font-weight: ${props => (props.nesting ? Normal : Medium)};
  padding: ${props => (props.nesting ? '0.5rem' : '0')};
  margin-bottom: 0;
`;

export const UnorderedList = styled.ul<ArrowProps>`
  list-style: none;
  display: ${props => (props.isexpanded ? 'block' : 'none')};

  a {
    text-decoration: none;
    color: ${C.GreyText};
  }
`;

export const ListItem = styled.li<SubNestingProps>`
  margin-left: ${props => (`${props.level/2}rem`)};
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: ${C.IgnitusBlue};
    color: ${C.White};
  }
`;

export const Arrow = styled(Icon)<ArrowProps>`
  height: 2rem;
  fill: ${props => (props.nesting ? C.GreyText : C.IgnitusBlue)};
  transform: ${props => (props.isexpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;
`;

export const HeadingArrowContainer = styled(flexibleRowDiv)<SubNestingProps>`
  margin-top: ${props => (props.nesting ? '0' : '1rem')};
  margin-left: ${props => (`${props.level/2}rem`)};
  justify-content: unset;
  cursor: pointer;
`;

export const StyledLogo = styled(Icon)`
  height: 3rem;
  path {
    fill: ${C.IgnitusBlue};
  }
`;
