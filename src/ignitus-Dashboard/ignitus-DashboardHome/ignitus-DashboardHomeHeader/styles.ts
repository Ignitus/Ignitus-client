import styled from '@emotion/styled';
import {
  GreyLight,
  IgnitusBlue,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { Icon } from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import { StyleProps } from './types';

export const SkeletonSearchBar = styled.div`
  width: 20rem;
  height: 2rem;
  background-color: ${GreyLight};
`;

export const SkeletonStyledIcon = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: ${GreyLight};
`;

export const SkeletonDropdown = styled.div`
  height: 2rem;
  width: 6rem;
  background-color: ${GreyLight};
`;

export const HomeNavigationRight = styled.div`
  display: flex;
  flex: 0.5;
  flex-grow: 0.5;
  align-items: center;
  justify-content: space-evenly;
`;

export const HomeNavigationLeft = styled.div`
  display: flex;
  flex: 6;
  flex-grow: 6;
  align-items: center;
`;

export const HomeStyledIcon = styled(Icon)<StyleProps>`
  width: ${props => (props.size === 'small' ? '1.2rem' : '2rem')};
  height: ${props => (props.size === 'small' ? '1.2rem' : '2rem')};
  margin-right: ${props => (props.marginRight ? '0.5rem' : '')};
  margin-left: ${props => (props.marginLeft ? '0.5rem' : '')};
  fill: ${IgnitusBlue};
`;
export const HomeNavigationItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  curson: pointer;
`;
