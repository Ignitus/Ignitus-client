import styled from '@emotion/styled';
import { White, IgnitusBlue } from '../colors';
import { Icon } from '../../../ignitus-Utilities/Components/icon';
import { StyleProps } from './types';
import { MD } from '../fonts';

export const Container = styled.div`
  background-color: ${White};
  width: 12rem;
  border-radius: 1rem;
  overflow: hidden;
  left: 0rem;
  margin-top: 1rem;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  width: 12rem;
`;

export const StyledIcon = styled(Icon)<StyleProps>`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${IgnitusBlue};
  margin-left: ${props => (props.marginLeft ? '0.5rem' : '')};
  margin-right: ${props => (props.marginRight ? '0.5rem' : '')};
`;
