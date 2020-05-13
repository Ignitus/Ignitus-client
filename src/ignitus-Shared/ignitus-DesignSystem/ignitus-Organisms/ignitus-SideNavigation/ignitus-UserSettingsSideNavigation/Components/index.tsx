import React from 'react';

import * as S from '../style';

export default function UserSettingsSideNavigation() {
  return (
    <S.SettingsContainer>
      <S.Layer text="General" marginTop />
      <S.Layer text="Password" />
      <S.Layer text="Messaging" />
      <S.Layer text="Notification" />
      <S.Layer text="Blocked Users" />
      <S.Layer text="Privacy" border={false} marginBottom />
    </S.SettingsContainer>
  );
}
