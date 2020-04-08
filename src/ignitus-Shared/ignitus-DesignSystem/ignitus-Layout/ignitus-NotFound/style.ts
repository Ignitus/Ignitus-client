import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import * as C from '../../ignitus-Atoms/colors';
import {SM} from '../../ignitus-Atoms/fonts';
import {Paragraph} from '../../ignitus-Atoms/typography';
import {Button} from '../../ignitus-Atoms/buttons';

export const eye = keyframes`
  0% ,30% , 55%, 90% , 100% {
    transform: translate(0, 0);
  }
  10%, 25% {
    transform: translate(0, 20px);
  }
  65% {
    transform: translate(-20px, 0);
  }
  80% {
    transform: translate(20px, 0);
  }
`;

export const shvr = keyframes`
  0% {
    transform: translate(1px, 1em);
  }
  50% {
    transform: translate(0, 1em);
  }
  100% {
    transform: translate(-1px, 1em);
  }
`;

export const textShow = keyframes`
  to {
    text-indent: -373px;
  }
`;

export const EyesContainer = styled.div`
  display: block;
  position: relative;
  width: 200px;
  margin: 10% auto 0;
  animation: ${shvr} 0.2s infinite;
  height: 100%;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    background: white;
    position: absolute;
    top: 30px;
    left: 25px;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    animation: ${eye} 2.5s infinite;
  }
`;

export const Eyes = styled.div`
  position: relative;
  display: inline-block;
  background: ${C.IgnitusBlue};
  width: 75px;
  height: 80px;
  border-radius: 50%;
  transform: rotate(45deg);

  &::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid ${C.IgnitusBlue};
    width: 70px;
    height: 50px;
    left: 0px;
    bottom: -10px;
    border-radius: 50%;
  }

  &::before {
    bottom: auto;
    top: -100px;
    transform: rotate(45deg);
    left: 0;
  }

  &:nth-of-type(2) {
    float: right;
    transform: rotate(-45deg);
  }

  &:nth-of-type(2)::after {
    left: 5px;
  }

  &:nth-of-type(3) {
    display: none;
  }
`;

export const AnimationText = styled.p`
  margin-top: 5rem;
  text-align: center;

  &::before {
    content: 'Got lost? How......?  Ahhhh...!';
    color: ${C.IgnitusBlue};
    width: 120px;
    font-size: 30px;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    animation: ${textShow} 2s infinite steps(3);
  }
`;

export const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

export const Message = styled.p`
  color: ${C.IgnitusBlue};
`;

export const StyledButton = styled(Button)`
  a {
    color: ${C.White};
  }
  &:hover {
    color: ${C.IgnitusBlue};
    a {
      color: ${C.IgnitusBlue};
      text-decoration: none;
    }
  }
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${C.IgnitusBlue};
  font-size: ${SM};
`;

/* Animation Credit goes to  https://codepen.io/paarmita/pen/pqVzZL */
