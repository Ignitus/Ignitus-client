import React from 'react';

import { Heading2, NewMessage } from '../../../../../ignitus-Shared';
import {
  Black,
  IgnitusBlue,
  White,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { Interface } from '../../../../styles';

export const InterfaceNewMessage: React.FC = () => (
  <Interface>
    <Heading2>New Message</Heading2>
    <hr />
    <NewMessage textColor={Black} titleColor={IgnitusBlue} bgColor={White} />
  </Interface>
);
