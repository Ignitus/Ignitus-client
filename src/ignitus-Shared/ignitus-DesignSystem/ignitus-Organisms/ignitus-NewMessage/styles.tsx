import styled from '@emotion/styled';
import { StyledTagProps } from './types';
import { DefaultInput, RoundedButton } from '../../..';
import * as C from '../../ignitus-Atoms/colors';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv } from '../../shared';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';

export const Container = styled.div<StyledTagProps>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 0.5rem;
  margin: 0.5rem;
  display: flex;
  width: 50rem;
  height: 35rem;
  flex-direction: column;
  box-shadow: 0px 3px 6px ${C.boxShadowColor};
`;

export const IconContainer = styled.button`
  background-color: ${C.IgnitusBlue};
  border: none;
  cursor: pointer;
`;

export const MessageHeader = styled(flexibleRowDiv)`
  width: 90%;
  align-items: center;
  justify-items: center;
  margin: 10px 0px 10px 0px;
`;

export const HeaderLeft = styled.div`
  flex: 1;
  justify-content: flex-start;
  font-size: ${F.LG};
  font-weight: ${F.Bold};
  padding-left: 12px;
  margin-left: 10px;
  color: ${C.GreyOne};
`;

export const Input = styled(DefaultInput)`
  background-color: ${C.GreyBackground};
  margin-left: 2rem;
`;

export const BodyOptions = styled(flexibleRowDiv)<StyledTagProps>`
  background: ${C.IgnitusBlue};
  height: 3rem;
  align-items: center;
`;

export const BodyTab = styled(flexibleRowDiv)`
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
`;

export const BodyTab1 = styled(BodyTab)``;

export const BodyTab2 = styled(BodyTab)`
  border: 0.45px solid ${C.GreyLight};
`;

export const BodyTab3 = styled(BodyTab)``;

export const MessageInput = styled.textarea`
  height: 85%;
  width: 85%;
  margin: 20px 20px 0 20px;
  background-color: ${C.GreyBackground};
  padding: 20px 0 0 20px;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.XL};
  border: none;
  resize: none;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.MD};
    opacity: 0.3;
  }
`;

export const ButtonContainer = styled(flexibleRowDiv)`
  justify-content: flex-end;
  margin: 1rem 0;
`;

export const Button = styled(RoundedButton)`
  font-weight: ${F.Bold};
  box-shadow: 0 6px 12px ${C.boxShadowColorLight};
`;

export const Icon = styled(I)`
  margin-right: 0.2rem;
`;
