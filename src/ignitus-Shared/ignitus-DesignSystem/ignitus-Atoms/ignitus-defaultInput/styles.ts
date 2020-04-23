import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';

export const Input = styled.input`
  height: 3rem;
  width: 300px;
  background-color: ${C.GreyLight};
  padding-left: 2rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.XL};
  border: none;
  border-radius: 17px;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.XL};
    opacity: 0.5;
  }
`;
