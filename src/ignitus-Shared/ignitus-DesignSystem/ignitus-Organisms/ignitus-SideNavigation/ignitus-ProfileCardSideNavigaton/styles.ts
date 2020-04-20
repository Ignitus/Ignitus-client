import styled from '@emotion/styled';
import * as C from '../../../ignitus-Atoms/colors'
import BookmarkIcon from '../../../ignitus-Assets/ignitus-Icons/bookmarkIcon';
import * as V from '../../../ignitus-Atoms/fonts';


export const Container = styled.div `
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
  margin: 0 0 2.5rem 0;
`;

export const UserImage = styled.img`
  border-radius: 1rem;
  height: 6rem;
  margin: 0 1.5rem 0 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.7rem;
`;

export const Name = styled.div`
  font-size: ${V.LG};
  font-weight: ${V.Bold};
  
`;

export const Designation = styled.div`
  font-size: ${V.XS};
  font-weight: ${V.SemiBold};
`;

export const ViewProfileContainer = styled.div`
  margin: 0.5rem 0 0 0;
`;

export const BottomSection = styled.div`
  display:flex;
  flex-direction: row;
`;

export const Icon = styled(BookmarkIcon)`
  fill: ${C.IgnitusBlue};
  height: 2rem;
  margin: 0 1rem 0 0;
`;

export const Text = styled.div`
  font-size: ${V.XS};
  font-weight: ${V.Normal};
`;

