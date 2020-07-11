import React from 'react';

import { Heading2, Heading4 } from '../../../../../ignitus-Shared';
import * as C from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { Interface } from '../../../../styles';
import * as S from '../style';

export const InterfaceNotifications: React.FC = () => (
  <Interface>
    <Heading2>Notifications</Heading2>
    <hr />
    <Heading4>Today</Heading4>
    <S.StyledNotifications
      textColor={C.Black}
      titleColor={C.IgnitusBlue}
      bgColor={C.White}
      picture="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png"
      title="Davis Johnson"
      textRight="is tracking your progress"
    />
    <S.StyledNotifications
      textColor={C.Black}
      titleColor={C.Orange}
      bgColor={C.White}
      title="3 mentors"
      textLeft="We found"
      textRight="that could help you with your journey"
    />
    <S.StyledNotifications
      textColor={C.Black}
      titleColor={C.IgnitusBlue}
      bgColor={C.White}
      picture="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png"
      title="Donald Kunkel"
      textRight="wants to connect with you"
    />
    <S.StyledNotifications
      textColor={C.Black}
      titleColor={C.Orange}
      bgColor={C.White}
      title="3 offers"
      textLeft="We found"
      textRight="that could interest you"
    />

    <br />
    <br />
    <br />

    <Heading4>Yesterday</Heading4>
    <S.StyledNotifications
      textColor={C.Black}
      titleColor={C.IgnitusBlue}
      background={C.White}
      image="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png"
      title="Donald Kunkel"
      textRight="wants to connect with you"
    />
    <S.StyledNotifications
      textColor={C.Black}
      titleColor={C.Orange}
      background={C.White}
      title="3 mentors"
      textLeft="We found"
      textRight="that could help you with your journey"
    />
  </Interface>
);
