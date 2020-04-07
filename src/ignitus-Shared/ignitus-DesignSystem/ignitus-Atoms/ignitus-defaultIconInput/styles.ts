import styled from '@emotion/styled';
import {GreyBackground, IgnitusBlue, GreyText, GreyLight} from '../colors';
import Icon from '../../../ignitus-Utilities/Components/icon';
import {Normal, SM} from '../fonts';
import {InputContainerProps} from './types';

export const InputContainer = styled.div<InputContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.position};
  border-radius: 0.5rem;
  border: 1px solid
    ${props => (props.position === 'row-reverse' ? GreyLight : GreyBackground)};
  padding: 0.7rem;
  background: ${props =>
    props.position === 'row-reverse' ? GreyLight : GreyBackground};

  &:hover {
    border: 1px solid ${IgnitusBlue};
  }
`;

export const Input = styled.input`
  width: 16rem;
  outline: none;
  border: none;
  background: transparent;
  font-size: ${SM};
  font-weight: ${Normal};
  color: ${GreyText};
`;

export const StyledIcon = styled(Icon)<InputContainerProps>`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  margin-right: ${props => (props.position === 'row-reverse' ? '1rem' : '0')};
  fill: ${IgnitusBlue};
`;
