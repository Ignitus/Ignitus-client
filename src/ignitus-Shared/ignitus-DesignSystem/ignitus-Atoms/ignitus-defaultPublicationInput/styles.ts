import styled from '@emotion/styled';
import {IgnitusBlue, GreySecondaryText, GreyLight} from '../colors';
import Icon from '../../../ignitus-Utilities/Components/icon';
import {Normal, SM} from '../fonts';

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 0.5rem;
  border: 1px solid ${GreyLight};
  padding: 0.5rem;
  background: ${GreyLight};

  &:hover {
    border: 1px solid ${IgnitusBlue};
  }
`;

export const Input = styled.input`
  width: 20rem;
  outline: none;
  border: none;
  padding-left: 10px;
  font-size: ${SM};
  font-weight: ${Normal};
  color: ${GreySecondaryText};
  background-color: ${GreyLight};
`;

export const StyledIcon = styled(Icon)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${IgnitusBlue};
`;
