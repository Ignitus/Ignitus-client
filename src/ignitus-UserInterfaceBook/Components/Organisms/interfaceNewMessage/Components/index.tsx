import React from 'react';

import { Heading2 } from '../../../../../ignitus-Shared';
import * as C from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { Interface } from '../../../../styles';
import * as S from '../style';

export const InterfaceNewMessage: React.FC = () => (
  <Interface>
    <Heading2>NewMessage</Heading2>
    <hr />
    <S.newMessage
      textColor={C.Black}
      titleColor={C.IgnitusBlue}
      bgColor={C.White}
    />
  </Interface>
);
