import styled from '@emotion/styled';
import { White, IgnitusBlue } from '../../ignitus-Atoms/colors';
import { default as I } from '../../../ignitus-Utilities/Components/icon';

export const Container = styled.div`
  background-color: ${White};
  width: 34rem;
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
`;

export const Content = styled.div`
  margin: 1rem;
  flex: 4;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: end;
  justify-content: space-evenly;
  padding: 1rem 0;
  flex: 1;
`;

export const Icon = styled(I)`
  height: 4rem;
  width: 4rem;
  fill: ${IgnitusBlue};
  transition: 0.3s;
`;