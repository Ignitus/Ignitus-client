import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';

export const Input = styled.input`
  width: 16rem;
  background: ${C.GreyLight};
  padding: 0.7rem;
  color: ${C.GreyText};
  font-weight: ${F.Normal};
  font-size: ${F.SM};
  border: 1px solid ${C.GreyLight};
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;

  ::placeholder {
    color: ${C.GreyOne};
    font-weight: ${F.Normal};
    font-size: ${F.SM};
  }
  &:hover {
    border: 1px solid ${C.IgnitusBlue};
  }
`;
