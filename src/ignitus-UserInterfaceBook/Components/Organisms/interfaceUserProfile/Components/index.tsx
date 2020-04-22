import React from 'react';
import {Heading2, UserProfileCard} from '../../../../../ignitus-Shared';
import {Interface} from '../../../../styles';

export const interfaceUserProfile: React.FC = () => (
  <Interface>
    <Heading2>User Profile</Heading2>
    <hr />
    <UserProfileCard />
  </Interface>
);
