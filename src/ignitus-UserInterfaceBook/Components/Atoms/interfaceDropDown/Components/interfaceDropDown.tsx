import React from 'react';
import * as D from '../styles';
import DefaultDropdown from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultDropdown/Components/defaultDropdown';
import { cars } from '../constants';

const interfaceDropDown = () => (
  <D.DropDownContainer>
    <DefaultDropdown options={cars} label={'cars'}/>
  </D.DropDownContainer>
);

export default interfaceDropDown;
