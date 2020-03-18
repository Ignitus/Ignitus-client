/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import * as S from '../style';
import {AppIcon} from '../../../../../types/iconsTypes/enums';

type props = {
  text: string;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  name: AppIcon;
};

export default function UserSettingsSideNavigation() {
  return (
    <S.SettingsContainer>
      <Layer text="Saved" marginTop={true} name={AppIcon.SaveIcon} />
      <Layer text="Liked" name={AppIcon.HeartIcon} />
      <Layer text="Applied" name={AppIcon.ApplyIcon} />
      <Layer text="My Network" name={AppIcon.NetworkIcon} />
      <Layer text="My Mentors" name={AppIcon.MentorsIcon} />
      <Layer
        text="Message"
        border={false}
        marginBottom={true}
        name={AppIcon.MessageIcon}
      />
    </S.SettingsContainer>
  );
}

const Layer = ({
  text,
  border = true,
  marginTop = false,
  marginBottom = false,
  name,
}: props) => (
  <S.Layer border={border} marginTop={marginTop} marginBottom={marginBottom}>
    <S.SideNavIcon name={name} />
    <S.styledParagraph>{text}</S.styledParagraph>
  </S.Layer>
);
