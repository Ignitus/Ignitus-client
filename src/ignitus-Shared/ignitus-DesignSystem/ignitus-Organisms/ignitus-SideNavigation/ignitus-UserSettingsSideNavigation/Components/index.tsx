import React from 'react';
import * as S from '../style';
import { Paragraph } from '../../../../ignitus-Atoms/typography';
import { IgnitusBlue } from '../../../../ignitus-Atoms/colors';

type props = {
  text: string;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
};

export default function UserSettingsSideNavigation() {
  return (
    <S.SettingsContainer>
      <Layer text="General" marginTop />
      <Layer text="Password" />
      <Layer text="Messaging" />
      <Layer text="Notification" />
      <Layer text="Blocked Users" />
      <Layer text="Privacy" border={false} marginBottom />
    </S.SettingsContainer>
  );
}

export const Layer = ({
  text,
  border = true,
  marginTop = false,
  marginBottom = false,
}: props) => (
  <S.Layer border={border} marginTop={marginTop} marginBottom={marginBottom}>
    <Paragraph color={IgnitusBlue}>{text}</Paragraph>
  </S.Layer>
);
