import React from 'react';
import { DeleteAccount, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';

export const MessageList = flexibleColDiv;

export const interfaceDeleteAccount: React.FC = () => (
  <Interface>
    <Heading2>Delete Account</Heading2>
    <hr />
    <DeleteAccount />
  </Interface>
);
