import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as B from '../../ignitus-Atoms/fonts';

export const Button = styled.div`
  align-items: center;
  background-color: ${C.IgnitusBlue};
  border-radius: 0.5rem;
  cursor: pointer;
  display:flex;
  height: 2rem;
  justify-content: center;
  width: 8rem;

  &:hover {
    border-radius: 0.5rem;
    box-shadow: 0 0 10px #000066;
    opacity: 1;
  }
`; 

export const Text = styled.div`
  color: ${C.White};
  font-size: ${B.XS};
`;