import styled from '@emotion/styled';
import { IgnitusBlue, GreyText, GreyLight } from '../colors';
import Icon from '../../../ignitus-Utilities/Components/icon';
import { Normal, SM } from '../fonts';

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 0.5rem;
  padding: 0.7rem;
  background: ${GreyLight};
  border: 1px solid ${GreyLight};
  &:hover {
    border: 1px solid ${IgnitusBlue};
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  font-size: ${SM};
  font-weight: ${Normal};
  color: ${GreyText};
`;

export const StyledIcon = styled(Icon)`
  height: 1.4rem;
  width: 1.4rem;
  cursor: pointer;
  fill: ${IgnitusBlue};
`;
