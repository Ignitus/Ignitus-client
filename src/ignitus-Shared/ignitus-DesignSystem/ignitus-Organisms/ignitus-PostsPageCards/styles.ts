import styled from '@emotion/styled';
import { White, IgnitusBlue, boxShadowColor } from '../../ignitus-Atoms/colors';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';
import { StyleProps } from './types';

export const Container = styled.div`
  box-shadow: 0 1rem 2rem 0 ${boxShadowColor};
  background-color: ${White};
  width: 37rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  algin-items: space-between;
  border-radius: 1rem;
`;

export const LeftRow = styled.div`
  flex: 1;
  padding: 1rem;
`;
export const Avatar = styled.img`
  border-radius: 5rem;
  width: 5rem;
`;

export const RightRow = styled.div`
  flex: 2;
`;
export const Column = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Content = styled.div`
  margin: 1rem;
  flex: 4;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
  /* margin-right: 1rem; */
  flex: 1;
`;

export const Icon = styled(I)<StyleProps>`
  height: ${props => (props.size === 'small' ? '1rem' : '4rem')};
  width: ${props => (props.size === 'small' ? '1rem' : '4rem')};
  fill: ${IgnitusBlue};
  transition: 0.3s;
  margin-right: ${props => (props.size === 'small' ? '0.3rem' : '0.5rem')};
`;
