import styled from '@emotion/styled';
import { White, IgnitusBlue } from '../colors';
import { XS } from '../fonts';

export const Select = styled.select`
  display: block;
  background-color: ${White};
  border: 2px solid ${IgnitusBlue};
  border-radius: 12px;
  font-size: ${XS};
  height: 2rem;
  width: 18rem;
  outline: none;
`;
