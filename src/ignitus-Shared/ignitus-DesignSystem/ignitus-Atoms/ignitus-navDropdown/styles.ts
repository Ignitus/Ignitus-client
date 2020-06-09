import styled from '@emotion/styled';
import { White, IgnitusBlue, GreyBackground } from '../colors';

export const Container = styled.div`
  background-color: ${White};
  width: 10rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Option = styled.div`
  border-bottom: 0.2rem solid ${GreyBackground};
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    background-color: ${IgnitusBlue};
    color: ${White};
  }
`;
