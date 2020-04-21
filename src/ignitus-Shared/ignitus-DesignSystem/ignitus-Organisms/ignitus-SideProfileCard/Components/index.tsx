import React from 'react';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';
import {Button} from '../../../ignitus-Atoms/buttons';
import * as S from '../styles';

export const SideProfileCard: React.FunctionComponent = () => (
  <S.Container>
    <S.TopSection>
      <S.UserImage
        src="https://storage.googleapis.com/ignitus_assets/ig-avatars/melanie.png"
        alt="ProfileImage"
      />
      <S.ProfileContainer>
        <S.ProfileDetails>
          <S.Name>Sophia Carter</S.Name>
          <S.Designation>Literature Student</S.Designation>
        </S.ProfileDetails>
        <S.ViewProfileContainer>
          <Button category="primary" size="medium">
            {' '}
            ViewProfile{' '}
          </Button>
        </S.ViewProfileContainer>
      </S.ProfileContainer>
    </S.TopSection>
    <S.BottomSection>
      <S.Icon name={AppIcon.BookmarkIcon} />
      <S.Text>21 students and 11 professors are tracking your progress</S.Text>
    </S.BottomSection>
  </S.Container>
);
