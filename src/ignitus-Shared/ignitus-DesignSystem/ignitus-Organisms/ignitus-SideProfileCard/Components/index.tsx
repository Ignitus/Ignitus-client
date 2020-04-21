import React from 'react';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';
import {Button} from '../../../ignitus-Atoms/buttons';
import {Props} from '../types';
import * as S from '../styles';

export const SideProfileCard = ({
  name,
  designation,
  trackingInformation,
}: Props) => (
  <S.Container>
    <S.TopSection>
      <S.Avatar
        src="https://storage.googleapis.com/ignitus_assets/ig-avatars/melanie.png"
        alt="ProfileImage"
      />
      <S.ProfileContainer>
        <S.Profile>
          <S.Name>{name}</S.Name>
          <S.Designation>{designation}</S.Designation>
        </S.Profile>
        <S.ButtonContainer>
          <Button category="primary" size="medium">
            {' '}
            ViewProfile{' '}
          </Button>
        </S.ButtonContainer>
      </S.ProfileContainer>
    </S.TopSection>
    <S.BottomSection>
      <S.Icon name={AppIcon.BookmarkIcon} />
      <S.Text>{trackingInformation}</S.Text>
    </S.BottomSection>
  </S.Container>
);
