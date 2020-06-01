import styled from '@emotion/styled';

import { Icon as I } from '../../../ignitus-Utilities/Components/icon';
import { flexibleColDiv } from '../../shared';
import { Paragraph, Heading3, Heading6 } from '../../ignitus-Atoms/typography';

import * as C from '../../ignitus-Atoms/colors';

export const Container = styled.div`
  background-color: ${C.White};
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  color: ${C.IgnitusBlue};
  display: flex;
  flex-direction: column;
  height: 12rem;
  justify-content: center;
  padding: 1.5rem;
  width: 17rem;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Avatar = styled.img`
  border-radius: 1rem;
  height: 6rem;
`;

export const ProfileContainer = styled(flexibleColDiv)`
  text-align: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.7rem;
`;

export const Name = styled(Heading3)``;

export const Designation = styled(Heading6)``;

export const ButtonContainer = styled.div``;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(I)`
  fill: ${C.IgnitusBlue};
  height: 2rem;
  margin: 0 1rem 0 0;
`;

export const Text = styled(Paragraph)``;
