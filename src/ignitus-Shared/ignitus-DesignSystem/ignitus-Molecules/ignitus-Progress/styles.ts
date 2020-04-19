import styled from '@emotion/styled';

import {IgnitusBlue} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {flexibleRowDiv} from '../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import {CircleProps} from './types';

export const Container = styled(flexibleRowDiv)``;

// to prevent console errors due to forwarding invalid props to DOM
const noForward = prop => prop !== 'fill' && prop !== 'current';

export const Circle = styled('span', { shouldForwardProp: noForward })<CircleProps>`
  width: 0.8rem;
  height: 0.8rem;
  border: 0.1rem solid ${IgnitusBlue};
  ${(props) => props.current
  && `box-shadow: inset 0px 0px 0px 0.1rem ${IgnitusBlue};`}
  border-radius: 50%;
  background-color: ${(props) => props.fill ? IgnitusBlue : 'none'};
  transition: background-color 0.5s linear;
  transition: box-shadow 0.5s ease-in;
`;

export const Line = styled.span`
  height: 0.1rem;
  width: 3rem;
  background-color: ${IgnitusBlue};
  margin: 0 0.5rem;
`;
