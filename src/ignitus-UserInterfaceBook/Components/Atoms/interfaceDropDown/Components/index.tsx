import React from 'react';

import DefaultDropdown from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultDropdown/Components/defaultDropdown';

import {cars} from '../constants';
import { Interface } from '../../../../styles';
import {
  Heading2,
  Heading5,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceDropDown: React.FC = () => (
  <Interface>
    <Heading2>DropDowns</Heading2>
    <hr />
    <Heading5>Inline Block</Heading5>
    <br />
    <DefaultDropdown options={cars} label={'cars'} display="inline-block" />
    <br />
    <br />
    <Heading5>Block</Heading5>
    <br />
    <DefaultDropdown options={cars} label={'cars'} display="block" />
  </Interface>
);
