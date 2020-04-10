import React from 'react';
import * as D from '../styles';
import DefaultDropdown from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultDropdown/Components/defaultDropdown';
import {cars} from '../constants';
import {
  Heading3,
  Heading5,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceDropDown: React.FC = () => (
  <D.DropDownContainer>
    <Heading3>DropDowns</Heading3>
    <hr />
    <hr />
    <Heading5>Inline Block</Heading5>
    <DefaultDropdown options={cars} label={'cars'} display="inline-block" />
    <br />
    <br />
    <Heading5>Block</Heading5>
    <DefaultDropdown options={cars} label={'cars'} display="block" />
  </D.DropDownContainer>
);
