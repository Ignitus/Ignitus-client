import styled from '@emotion/styled';
import { GreyLight } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6rem 3rem;
  justify-content: center;
  algin-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  left: 2rem;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightSection = styled.div`
  position: fixed;
  right: 2rem;
`;

export const Wrapper = styled.div`
  margin: 1rem;
`;

export const SkeletonSideProfile = styled.div`
  background-color: ${GreyLight};
  height: 12rem;
  width: 17rem;
`;

export const SkeletonDashBoardNavigation = styled.div`
  background-color: ${GreyLight};
  height: 20rem;
  width: 14rem;
`;

export const SkeletonMulti = styled.div`
  background-color: ${GreyLight};
  height: 9rem;
  width: 36rem;
`;

export const SkeletonFooter = styled.div`
  background-color: ${GreyLight};
  width: 20rem;
  height: 8rem;
`;

export const SkeletonCards = styled.div`
  background-color: ${GreyLight};
  width: 37rem;
  height: 7rem;
  margin: 1rem;
`;

export const SkeletonCardsContainer = styled.div`
  margin: 1rem;
`;
