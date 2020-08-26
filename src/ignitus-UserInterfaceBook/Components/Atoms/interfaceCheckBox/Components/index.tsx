import React from 'react';
import { DefaultCheckbox, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { MD } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const interfaceCheckBox: React.FC = () => (
  <Interface>
    <Heading2>Check Box </Heading2>
    <hr />
    <DefaultCheckbox value="cars" label="cars" size={MD} />
  </Interface>
);
