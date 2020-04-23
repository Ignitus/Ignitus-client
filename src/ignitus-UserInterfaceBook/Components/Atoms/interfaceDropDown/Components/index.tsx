import React from 'react';

import {cars} from '../constants';
import { Interface } from '../../../../styles';
import {
  DefaultDropdown,
  Heading2,
  Heading5,
} from '../../../../../ignitus-Shared';

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
