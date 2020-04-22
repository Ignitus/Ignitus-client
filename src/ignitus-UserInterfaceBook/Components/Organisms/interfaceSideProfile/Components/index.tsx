import React from 'react';

import {SideProfileCard} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideProfileCard/Components';
import {Heading2} from '../../../../../ignitus-Shared';
import {Interface} from '../../../../styles';

export const interfaceSideProfile: React.FC = () => (
  <Interface>
    <Heading2>Side Profile</Heading2>
    <hr />
    <SideProfileCard
      name="Sophia Carter"
      designation="Literature Student"
      trackingInformation="21 students and 11 professors are tracking your progress"
    />
  </Interface>
);
