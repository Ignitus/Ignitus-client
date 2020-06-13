import styled from '@emotion/styled';
import { flexibleColDiv } from '../../shared';
import { Icon } from '../../../ignitus-Utilities/Components/icon';
import { Heading1 } from '../../..';

export const Overlay = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 102, 0.89);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
`;

export const Logo = styled(Icon)`
  margin-bottom: 4rem;
  height: 7.5rem;
  path {
    fill: white;
  }
`;

export const Heading = styled(Heading1)`
  margin-bottom: 1.5rem;
`;

export const MessageSection = flexibleColDiv;
