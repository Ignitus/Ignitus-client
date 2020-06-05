import styled from '@emotion/styled';
import { Props } from './types';
import { flexibleColDiv } from '../../shared';
import { Paragraph as P } from '../../..';
import { Icon } from '../../../ignitus-Utilities/Components/icon';

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

export const MessageSection = flexibleColDiv;

export const Paragraph = styled(P)<Props>`
  color: white;
  margin-top: ${props => (props.secondary ? '1.5rem' : '0')};
  font-size: 1.7rem;
`;
