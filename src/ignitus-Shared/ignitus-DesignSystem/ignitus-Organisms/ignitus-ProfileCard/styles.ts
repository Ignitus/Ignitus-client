import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import { flexibleColDiv, flexibleRowDiv, Link } from '../../shared';
import { Heading1, Heading4 } from '../../ignitus-Atoms/typography';

import { maximumWidthQuery } from '../../ignitus-Atoms/media';
import { XXXL, SemiBold } from '../../ignitus-Atoms/fonts';

import Icon from '../../../ignitus-Utilities/Components/icon';

type TextIconProps = {
  contentDistance?: string;
  direction?: string;
};

type IconProps = {
  size?: string;
};

type TextProps = {
  iconDistance?: number;
  contentColor?: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${C.White};
  color: ${C.IgnitusBlue};
`;

export const TopSection = styled.div`
  text-align: end;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftRow = styled(flexibleRowDiv)``;

export const Avatar = styled.img`
  width: 10rem;
  border-radius: 1rem;
`;

export const MiddleRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled(flexibleRowDiv)`
  width: 200px;
  height: 190px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

export const ProfileHeading = styled(Heading1)`
  font-size: ${XXXL};
  font-weight: ${SemiBold};
`;

export const ProfileSubHeading = styled(Heading4)`
  flex: 1;
  margin-bottom: 1rem;
`;

export const SocialDiv = styled(flexibleColDiv)`
  padding: 0.5rem;
  flex: 1 30%;
  align-items: flex-start;
  ${maximumWidthQuery[0]} {
    align-items: center;
  }
`;

export const SocialContact = styled(flexibleColDiv)`
  flex: 100%;
`;

export const SocialIcons = styled.div`
  flex: 100%;
  margin-top: 0.5em;
  margin-bottom: 2em;
`;

export const SocialLinks = styled(Link)`
  margin-right: 2.3em;
  display: inline-block;
`;

export const SocialLinkIcons = styled(Icon)`
  height: 1.8rem;
  margin-bottom: 0.5em;
  fill: ${C.IgnitusBlue};
`;

//Text Icon Container

export const TextIconContainer = styled(flexibleRowDiv)<TextIconProps>`
  justify-content: flex-start;
  width: 100%;
  margin-bottom: ${props =>
    props.contentDistance ? `${props.contentDistance}rem` : '1rem'};
  flex-direction: ${props => (props.direction ? 'row-reverse' : '')};
  align-items: end;
`;

export const TextIcon = styled(Icon)<IconProps>`
  height: ${props => (props.size ? `${props.size}rem` : '1.8rem')};
  fill: ${C.IgnitusBlue};
`;

export const TextIconContent = styled.span<TextProps>`
  font-weight: 500;
  color: ${props => (props.contentColor ? props.contentColor : ``)};
  padding: ${props =>
    props.iconDistance ? `0 ${props.iconDistance}px` : '0 15px'};
  flex: 1;
  align-self: center;
`;

// Drop Down Menu

export const DropDownBtnContainer = styled.div`
  flex: 100%;
  position: relative;
`;

export const DropDownBtn = styled.div`
  font-weight: bold;
  color: ${C.GreyOne};
  cursor: pointer;
  display: inline-block;
  padding-bottom: 10px;
  transition: all 0.4s;
  width: fit-content;

  &:hover {
    ul {
      display: block;
    }
  }
`;

export const DropDownMenu = styled.ul`
  z-index: 3;
  position: absolute;
  top: 30px;
  left: 0;
  border-radius: 10px 0 10px 10px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  background-color: ${C.White};
  color: ${C.IgnitusBlue};
  display: none;
  font-weight: 400;

  &:hover {
    display: block;
  }
`;

export const DropDownMenuListItem = styled.li`
  padding: 0.5em 1em;
  font-size: 14px;
  width: 200px;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    color: ${C.White};
    background-color: ${C.IgnitusBlue};
    cursor: pointer;
  }
`;
