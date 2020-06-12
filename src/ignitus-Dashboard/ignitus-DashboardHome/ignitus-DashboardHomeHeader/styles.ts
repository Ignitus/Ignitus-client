import styled from '@emotion/styled';
import {
  GreyLight,
  IgnitusBlue,
  GreyBackground,
  GreyOne,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { Icon } from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import { StyleProps } from './types';
import { DefaultIconInput } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultIconInput/Components/defaultIconInput/index';

export const SkeletonSearchBar = styled.div`
  width: 13rem;
  height: 2.2rem;
  background-color: ${GreyLight};
  margin-right: 1rem;
`;

export const SkeletonStyledIcon = styled.div`
  height: 1.7rem;
  width: 1.7rem;
  background-color: ${GreyLight};
  margin: 0rem 1rem;
`;

export const SkeletonDropdown = styled.div`
  height: 2rem;
  width: 7rem;
  background-color: ${GreyLight};
  margin-right: 2rem;
  margin-left: 1rem;
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
  width: ${props => (props.size === 'small' ? '1.5rem' : '1.7rem')};
  height: ${props => (props.size === 'small' ? '1.5rem' : '1.7rem')};
  margin: ${props => (props.marginHorizontal ? '0rem 1rem' : '0rem 0.3rem')};
  fill: ${IgnitusBlue};
`;
export const HomeNavigationItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
  curson: pointer;
`;

export const SearchBar = styled(DefaultIconInput)`
  flex-direction: row-reverse;
  height: 1rem;
  background-color: ${GreyBackground};
  outline: none;
  border: none;
  margin: 0rem 1rem;
  border-radius: 0.5rem;
  svg {
    margin: 0 0.5rem 0 0;
    fill: ${GreyOne};
  }
`;
