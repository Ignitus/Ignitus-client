import styled from '@emotion/styled';

import { White, IgnitusBlue, GreyLight } from '../../../ignitus-Atoms/colors';
import { MD, SemiBold, Normal } from '../../../ignitus-Atoms/fonts';
import { StyledLayerProps } from './types';

export const Layer = styled.div<StyledLayerProps>`
  border-bottom: ${props => (props.border ? `1px solid ${GreyLight}` : 'null')};
  color: ${IgnitusBlue};
  cursor: pointer;

  font-size: ${MD};
  font-weight: ${props => (props.semiBold ? `${SemiBold}` : `${Normal}`)};
  padding: 1rem 0;
  width: 100%;
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};

  &:hover {
    background-color: ${IgnitusBlue};
    color: ${White};
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
