import React from 'react';
import * as S from '../style';
import {AppIcon} from '../../../../../types/iconsTypes/iconEnums';
import { Paragraph } from '../../../../ignitus-Atoms/typography';
import { IgnitusBlue } from '../../../../ignitus-Atoms/colors';

type props = {
  text: string;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  name: AppIcon;
};

export default function DashboardNavigation() {
  return (
    <S.SettingsContainer>
      <Layer text="Saved" marginTop={true} name={AppIcon.SaveIcon} />
      <Layer text="Liked" name={AppIcon.HeartIcon} />
      <Layer text="Applied" name={AppIcon.ApplyIcon} />
      <Layer text="Network" name={AppIcon.NetworkIcon} />
      <Layer text="Mentors" name={AppIcon.MentorsIcon} />
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
    <Paragraph color={IgnitusBlue}>{text}</Paragraph>
  </S.Layer>
);
