import styled from '@emotion/styled/macro';
import { White, IgnitusBlue } from '../colors';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';
import { StyleProps } from './types';
import { MD } from '../fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

export const Column = styled.div`
  background-color: ${White};
  border-radius: 1rem;
  margin-top: 1rem;
`;

export const NavigationHeading = styled.div`
  align-items: center;
  color: ${IgnitusBlue};
  cursor: pointer;
  display: flex;
  font-size: ${MD};
  justify-content: flex-end;
`;

export const Icon = styled(I)<StyleProps>`
  height: 2rem;
  fill: ${IgnitusBlue};
  margin: 0 0.5rem;
`;

export const Text = styled.div`
  text-align: center;
`;
