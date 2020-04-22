import styled from '@emotion/styled';
import {color} from './types';
import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { hexDifferentiate } from '../../../../ignitus-Shared';

export const ColorsContainer = styled.div`
  padding: 3rem;
`;

export const Color = styled.div<color>`
  display: inline-block;
  padding: 0.5rem;
  width: 6rem;
  margin: 0.5rem;
  color: ${props => (hexDifferentiate(props.hex) ? C.Black : C.White)};
  background: ${props => props.hex};
`;
