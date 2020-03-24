import React from 'react';
import * as C from '../styles';
import {DefaultCheckbox} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultCheckbox/Components';
import {
  Heading3,
  Heading5,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

const interfaceCheckBox = () => (
  <C.CheckBoxContainer>
    <Heading3>CheckBoxes</Heading3>
    <hr />
    <hr />
    <DefaultCheckbox value={'cars'} label={'cars'} />
  </C.CheckBoxContainer>
);

export default interfaceCheckBox;
