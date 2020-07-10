import styled from '@emotion/styled';
import { IgnitusLogo } from '../../ignitus-Assets/ignitus-Icons/ignitusLogo';
import { IgnitusBlue, GreyLight } from '../colors';

export const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  margin: auto;
  border: 1rem solid ${GreyLight};
  border-radius: 50%;
  border-top: 1rem solid ${IgnitusBlue};
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  -webkit-animation: spin 2.5s linear infinite;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Logo = styled(IgnitusLogo)`
  height: 65%;
  fill: ${IgnitusBlue};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 10rem;
  height: 10rem;
`;
