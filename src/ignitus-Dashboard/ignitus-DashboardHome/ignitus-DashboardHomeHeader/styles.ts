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
  height: 1.7rem;
  width: 1.7rem;
  background-color: ${GreyLight};
  margin: 0rem 1rem;
`;

export const SkeletonDropdown = styled.div`
  height: 2rem;
  width: 6rem;
  background-color: ${GreyLight};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HomeNavigationRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HomeNavigationLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
  justify-content: space-evenly;
`;

export const HomeStyledIcon = styled(Icon)<StyleProps>`
  width: ${props => (props.size === 'small' ? '1.2rem' : '1.7rem')};
  height: ${props => (props.size === 'small' ? '1.2rem' : '1.7rem')};
  margin: ${props => (props.marginHorizontal ? '0rem 1rem' : '0rem 0.5rem')};
  fill: ${IgnitusBlue};
`;
export const HomeNavigationItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  curson: pointer;
`;
