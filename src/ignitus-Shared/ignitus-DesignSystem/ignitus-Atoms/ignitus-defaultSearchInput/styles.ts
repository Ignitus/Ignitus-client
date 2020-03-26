import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';

export const Input = styled.input`
  height: 2em;
  width: 10em;  
  border :none;
  margin:0.2em;
  color: ${C.IgnitusBlue};
  font-weight: ${F.Light};
  font-size: ${F.XL};
  ::placeholder {
    color: ${C.IgnitusBlue};
    font-weight: ${F.Light};
    font-size: ${F.XL};
  }
`;