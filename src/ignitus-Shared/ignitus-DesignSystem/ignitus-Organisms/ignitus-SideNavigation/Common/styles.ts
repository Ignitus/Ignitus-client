import styled from '@emotion/styled';

import { White, IgnitusBlue, GreyLight } from '../../../ignitus-Atoms/colors';
import { MD, Normal } from '../../../ignitus-Atoms/fonts';
import { StyledLayerProps } from './types';

export const Layer = styled.div<StyledLayerProps>`
  border-bottom: ${props => (props.border ? `1px solid ${GreyLight}` : 'null')};
  color: ${IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  font-weight: ${Normal};
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};
  padding: 1rem 0;
  width: 100%;
  &:hover {
    background-color: ${IgnitusBlue};
    p {
      color: ${White};
    }
    ${props =>
      props.containIcon
        ? `
        svg {
          fill: ${White};
        }`
        : ''}
  }
`;
