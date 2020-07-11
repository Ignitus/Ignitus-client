import styled from '@emotion/styled';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';
import { StyledTagProps } from './types';
import { Paragraph } from '../../..';
import { Bold } from '../../ignitus-Atoms/fonts';

export const Container = styled.span<StyledTagProps>`
  background: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Icon = styled(I)`
  width: 1.5rem;
  fill: ${props => props.color};
  transition: 0.3s;
`;

export const Image = styled.img`
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Text = styled(Paragraph)`
  font-weight: ${Bold};
  color: ${props => props.color};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightContainer = styled.div``;
