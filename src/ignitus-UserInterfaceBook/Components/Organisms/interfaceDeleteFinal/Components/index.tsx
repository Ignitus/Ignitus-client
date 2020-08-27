import React from 'react';
import { DeleteFinal, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';

export const MessageList = flexibleColDiv;

export const interfaceDeleteFinal: React.FC = () => (
  <Interface>
    <Heading2>Delete Final</Heading2>
    <hr />
    <DeleteFinal />
  </Interface>
);
