import styled from '@emotion/styled';

import {IgnitusBlue, GreyLight} from '../../../../ignitus-Shared';
import {flexibleRowDiv} from '../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import {CircleProps, LineProps} from './types';

export const Container = styled(flexibleRowDiv)``;

// to prevent console errors due to forwarding invalid props to DOM
const noForward = prop => prop !== 'fill' && prop !== 'current';

export const Circle = styled('span', { shouldForwardProp: noForward })<CircleProps>`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border: 0.1rem solid ${IgnitusBlue};
  ${(props) => props.current
  && `box-shadow: inset 0px 0px 0px 0.1rem ${IgnitusBlue};`}
  border-radius: 50%;
  background-color: ${(props) => props.fill ? IgnitusBlue : 'none'};
  transition: background-color 0.2s linear 0.1s, box-shadow 0.5s ease-in ${(props) => props.delay}s;
`;

export const Line = styled('span', { shouldForwardProp: noForward })<LineProps>`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  background-color: ${GreyLight};
  ${(props) => props.fill ? `box-shadow: inset 100px 0 0 0 ${IgnitusBlue};` : null}
  margin: 0 0.5rem;
  transition: box-shadow ${(props) => props.transition}s linear;
`;
