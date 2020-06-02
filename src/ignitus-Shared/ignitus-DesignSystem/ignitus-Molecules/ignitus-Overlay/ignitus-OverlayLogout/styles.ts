import styled from '@emotion/styled';
import { Props } from './types';
import { flexibleColDiv } from '../../../shared';
import { Paragraph as P } from '../../../..';
import { Icon } from '../../../../ignitus-Utilities/Components/icon';

export const Overlay = styled.div`
  position: relative;
  background-color: rgba(0, 0, 102, 0.89);
  backdrop-filter: blur(10px);
  width: 62rem;
  height: 35rem;
`;

export const Logo = styled(Icon)`
  padding: 2rem;
  width: 5rem;
  height: 5rem;
  path {
    fill: white;
  }
`;

export const TopSection = styled(flexibleColDiv)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 2rem;
`;

export const Paragraph = styled(P)<Props>`
  color: white;
  margin-top: ${props => (props.secondary ? '1.5rem' : '0')};
  font-size: 1.7rem;
`;
