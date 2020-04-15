import styled from '@emotion/styled';
import {IgnitusBlue, White, Red, GreyOne} from '../colors';
import {SM} from '../fonts';
import Icon from '../../../ignitus-Utilities/Components/icon';
import {flexibleRowDiv} from '../../shared';

export const InputContainer = styled(flexibleRowDiv)`
  border: 1px solid ${IgnitusBlue};
  border-radius: 0.5rem;
  padding: 0.2rem;
  width: 14rem;
  background: ${White};
  &:focus {
    color: ${Red};
  }
`;

export const Input = styled.input`
  border: none;
  font-size: ${SM};
  outline: none;
  flex: 1;
  &::placeholder {
    color: ${GreyOne};
  }
`;

export const StyledIcon = styled(Icon)`
  height: 1.2rem;
  width: 1.2rem;
  fill: ${IgnitusBlue};
  transition: 0.3s;
  flex: 1;
`;
