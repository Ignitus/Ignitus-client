import styled from '@emotion/styled';
import Icon from '../../../ignitus-Utilities/Components/icon';
import { StyledTagProps } from './types';

export const StyledIcon = styled(Icon)`
  height: 1rem;
  width: 1.2rem;
  fill: ${props => props.color};
  transition: 0.3s;
  flex: 1;
  margin: 0.03rem;
`;

export const StyledTag = styled.span<StyledTagProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  text-align: center;
  border-radius: 2.8rem;
  margin: 0.5rem;
  line-height: 1rem;
  padding: 1rem 2rem;
  display: inline-block;
`;
