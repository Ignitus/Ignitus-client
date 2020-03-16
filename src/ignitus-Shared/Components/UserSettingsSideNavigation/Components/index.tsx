/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import * as S from '../style';

type props = {
  text: string;
};

export default function UserSettingsSideNavigation() {
  return (
    <S.SettingsContainer>
      <Layer text="General" />
      <Layer text="Password" />
      <Layer text="Messaging" />
      <Layer text="Notification" />
      <Layer text="Blocked Users" />
      <Layer text="Privacy" />
    </S.SettingsContainer>
  );
}

const Layer = ({ text }: props) => <S.Layer className="option general">{text}</S.Layer>;
