import React from 'react';
import * as C from '../styles';
import { DefaultCheckbox } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultCheckbox/Components';

const interfaceCheckBox = () => (
  <C.CheckBoxContainer>
    <DefaultCheckbox value={'cars'} label={'cars'} />
  </C.CheckBoxContainer>
);

export default interfaceCheckBox;
