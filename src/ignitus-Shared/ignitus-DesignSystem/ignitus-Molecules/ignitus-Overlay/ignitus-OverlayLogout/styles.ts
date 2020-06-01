import styled from '@emotion/styled';
import { Props } from './types';
import { flexibleColDiv } from '../../../shared';
import { Paragraph as P } from '../../../..';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 102, 0.89);
  backdrop-filter: blur(10px);
  position: absolute;
`;

export const TopSection = styled(flexibleColDiv)`
  padding: 2rem;
`;

export const Paragraph = styled(P)<Props>`
  color: black;
  margin-top: ${props => (props.secondary ? '1.5rem' : '0')};
`;
