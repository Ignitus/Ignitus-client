import styled from '@emotion/styled';
import {flexibleRowDiv} from '../../shared';
import * as C from '../colors';
import {SM} from '../fonts';
import { default as I } from '../../../ignitus-Utilities/Components/icon';
import {Button as Btn} from '../buttons';

export const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 1rem;
  background: ${C.White};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
  border-radius: 16px;
  width: 25rem;
`;

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Input = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  overflow: hidden;
  font-size: ${SM};
  resize: none;
  &::placeholder {
    color: ${C.Grey1};
    resize: none;
  }
`;

export const IconsContainer = styled(flexibleRowDiv)`
  background: ${C.GreyBackground};
  border-radius: 1rem;
  display: inline-flex;
`;

export const IconCon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const Button = styled(Btn)`
  border-radius: 0.5rem;
`;

export const Icon = styled(I)`
  height: 1.2rem;
  width: 1.2rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;
