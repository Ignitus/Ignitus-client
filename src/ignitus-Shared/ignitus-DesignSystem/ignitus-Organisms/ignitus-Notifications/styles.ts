import styled from '@emotion/styled';
import { Icon } from '../../../ignitus-Utilities/Components/icon';
import { StyledTagProps } from './types';

export const StyledTag = styled.span<StyledTagProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  text-align: center;
  border-radius: 2rem;
  line-height: 1rem;
  padding: 1rem 2rem;
  display: inline-flex;
  align-items: center;
  margin: 0.5rem;
  cursor: pointer;
  width: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  fill: ${props => props.color};
  transition: 0.3s;
`;

export const Image = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Text = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RightContainer = styled.div``;
