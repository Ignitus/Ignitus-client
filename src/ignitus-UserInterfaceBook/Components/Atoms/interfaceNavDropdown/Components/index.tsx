import React from 'react';
import { DashboardNavigationDropdown } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-navDropdown/Components';
import { Options, Name } from '../constants';
import { Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceDashboardNavigationDropdown = () => (
  <Interface>
    <Heading2>Dashboard DropDown</Heading2>
    <hr />
    <DashboardNavigationDropdown Options={Options} Name={Name} />
  </Interface>
);
