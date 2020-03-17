import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import {flexibleColDiv} from '../../ignitus-Atoms/atoms';
import {MD, Normal} from '../../ignitus-Atoms/fonts';

export const EyesContainer = styled.div`
  display: block;
  position: relative;
  width: 200px;
  margin: 10% auto 0;
  animation: shvr 0.2s infinite;
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
    box-shadow: 125px 0 0 white;
    animation: eye 2.5s infinite;
  }
`;

export const Eyes = styled.div`
  position: relative;
  display: inline-block;
  background: ${C.IgnitusBlue};
  width: 75px;
  height: 80px;
  border-radius: 50% 50% 50% 50%/45px 45px 45% 45%;
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
