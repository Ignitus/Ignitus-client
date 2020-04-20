import React from 'react';
import * as S from '../styles';
import ViewProfileButton from '../../../../ignitus-Molecules/ignitus-ViewProfileButton/Components';


const ProfileSideNavigation: React.FunctionComponent = () => (
  <S.Container>
    <S.TopSection>
      <S.UserImage src="https://storage.googleapis.com/ignitus_assets/ig-avatars/melanie.png" alt="ProfileImage"/>
      <S.ProfileContainer>
        <S.ProfileDetails>
          <S.Name>Sophia Carter</S.Name>
          <S.Designation>Literature Student</S.Designation>
        </S.ProfileDetails>
        <S.ViewProfileContainer>
          <ViewProfileButton/>
        </S.ViewProfileContainer>
      </S.ProfileContainer>
    </S.TopSection>
    <S.BottomSection>
      <S.Icon />
      <S.Text>21 students and 11 professors are tracking your progress</S.Text>
    </S.BottomSection>
  </S.Container>
);

export default ProfileSideNavigation;