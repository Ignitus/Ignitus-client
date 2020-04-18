import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';

import {
  flexibleColDiv,
  flexibleRowDiv,
  Link as L,
  Paragraph as P,
} from '../../shared';
import {Heading1, Heading4} from '../../ignitus-Atoms/typography';
import {XXXL, SemiBold, Normal} from '../../ignitus-Atoms/fonts';

import {default as I} from '../../../ignitus-Utilities/Components/icon';
import {ParagraphProps} from './types';

export const Container = styled.div`
  display: flex;
  width: 60rem;
  flex-direction: column;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  color: ${C.IgnitusBlue};
`;

export const TopSection = styled.div`
  text-align: end;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

export const LeftRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  justify-content: flex-start;
`;

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

export const Paragraph = styled(P)<ParagraphProps>`
  color: ${props => (props.primary ? C.IgnitusBlue : C.GreySecondaryText)};
  font-weight: ${Normal};
  display: inline;
  margin: ${props => props.margin};
`;

export const Name = styled(Heading1)`
  font-size: ${XXXL};
  font-weight: ${SemiBold};
`;

export const Designation = styled(Heading4)`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const ProfileInformationContainer = styled.div`
  margin-left: 4rem;
`;

export const RightRow = styled(flexibleColDiv)`
  flex: 1;
  align-items: flex-start;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Icons = styled(flexibleRowDiv)`
  margin-bottom: 2rem;
`;

export const Link = styled(L)`
  margin-right: 2rem;
  display: inline-block;
`;

export const Icon = styled(I)`
  width: 1.5rem;
  fill: ${C.IgnitusBlue};
  path {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0.6rem 0;
  flex-direction: row;
`;

export const DropDownBtnContainer = styled.div`
  position: relative;
  margin-top: 1rem;
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
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
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

  &:first-of-type {
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
