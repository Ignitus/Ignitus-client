import styled from '@emotion/styled';
import { flexibleColDiv } from '../../../shared';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 102, 0.89);
  backdrop-filter: blur(10px);
  position: absolute;
`;

export const TopSection = styled(flexibleColDiv)`
  padding: 2rem;
`;
