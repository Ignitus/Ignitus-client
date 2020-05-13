import React from 'react';

import * as S from '../style';
import { AppIcon } from '../../../../../types/iconsTypes/iconEnums';

export default function DashboardNavigation() {
  return (
    <S.SettingsContainer>
      <S.Layer
        text="Saved"
        marginTop
        prepend={<S.SideNavIcon name={AppIcon.SaveIcon} />}
      />
      <S.Layer
        text="Liked"
        prepend={<S.SideNavIcon name={AppIcon.HeartIcon} />}
      />
      <S.Layer
        text="Applied"
        prepend={<S.SideNavIcon name={AppIcon.ApplyIcon} />}
      />
      <S.Layer
        text="Network"
        prepend={<S.SideNavIcon name={AppIcon.NetworkIcon} />}
      />
      <S.Layer
        text="Mentors"
        prepend={<S.SideNavIcon name={AppIcon.MentorsIcon} />}
      />
      <S.Layer
        text="Message"
        border={false}
        marginBottom
        prepend={<S.SideNavIcon name={AppIcon.MessageIcon} />}
      />
    </S.SettingsContainer>
  );
}
