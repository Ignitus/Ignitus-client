import React from 'react';
import * as S from '../style';

type props = {
  text: string;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
};

export default function UserSettingsSideNavigation() {
  return (
    <S.SettingsContainer>
      <Layer text="General" marginTop={true} />
      <Layer text="Password" />
      <Layer text="Messaging" />
      <Layer text="Notification" />
      <Layer text="Blocked Users" />
      <Layer text="Privacy" border={false} marginBottom={true} />
    </S.SettingsContainer>
  );
}

const Layer = ({
  text,
  border = true,
  marginTop = false,
  marginBottom = false,
}: props) => (
  <S.Layer border={border} marginTop={marginTop} marginBottom={marginBottom}>
    {text}
  </S.Layer>
);
