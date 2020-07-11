import React from 'react';
import { NavDropdown } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-navDropdown/Components';
import { options, name } from '../constants';
import { Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceNavDropdown = () => (
  <Interface>
    <Heading2>Dashboard DropDown</Heading2>
    <hr />
    <NavDropdown options={options} name={name} />
  </Interface>
);
