import React from 'react';
import { DefaultCheckbox } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultCheckbox/Components';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceCheckBox: React.FC = () => (
  <Interface>
    <Heading2>Check Box </Heading2>
    <hr />
    <DefaultCheckbox value={'cars'} label={'cars'} />
  </Interface>
);
