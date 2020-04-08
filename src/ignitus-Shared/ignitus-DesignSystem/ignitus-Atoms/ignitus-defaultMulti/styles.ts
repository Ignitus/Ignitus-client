import styled from '@emotion/styled';
import {flexibleRowDiv} from '../../shared';
import * as C from '../colors';
import {SM} from '../fonts';
import {default as I} from '../../../ignitus-Utilities/Components/icon';

export const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: ${C.White};
  box-shadow: 0 2px 4px 0 ${C.boxShadow};
  border-radius: 1rem;
  width: 70%;
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
  height: 8rem;
  overflow: hidden;
  font-size: ${SM};
  &::placeholder {
    color: ${C.GreyOne};
  }
`;

export const IconsContainer = styled(flexibleRowDiv)`
  background: ${C.GreyLight};
  border-radius: 1rem;
  display: inline-flex;
`;

export const IconContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0.2rem;
  padding: 0.5rem;
`;

export const Icon = styled(I)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;
