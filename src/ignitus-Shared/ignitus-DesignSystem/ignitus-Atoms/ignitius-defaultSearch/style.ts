import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';


export const Input = styled.input`
  height: 40px;
  width: 300px;
  background-color: ${C.GreyBackground};
  padding-left: 3px;
  color: #000066;
  font-weight: ${F.SemiBold};
  font-size: ${F.XL};
  border: none;
  border-radius: 10px;
  ::placeholder {
    color: ${C.IgnitusBlue};
    font-weight: ${F.SemiBold};
    font-size: ${F.XL};
  }
`;