import styled from '@emotion/styled';
import { White, IgnitusBlue } from '../colors';
import { XS } from '../fonts';
import { DropDownProps } from './types';

export const Select = styled.select<DropDownProps>`
  display: ${props => props.display};
  margin-left: ${props => (props.display === 'inline-block' ? '1rem' : '0')};
  background-color: ${White};
  border: 2px solid ${IgnitusBlue};
  border-radius: 12px;
  font-size: ${XS};
  height: 2rem;
  width: 18rem;
  outline: none;
`;
