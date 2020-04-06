import styled from '@emotion/styled';
import {GreyBackground, IgnitusBlue, GreyText} from '../colors';

import Icon from '../../../ignitus-Utilities/Components/icon';
import {Normal, SM} from '../fonts';

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 0.5rem;
  padding: 0.7rem;
  background: ${GreyBackground};
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

export const StyledIcon = styled(Icon)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  fill: ${IgnitusBlue};
`;
