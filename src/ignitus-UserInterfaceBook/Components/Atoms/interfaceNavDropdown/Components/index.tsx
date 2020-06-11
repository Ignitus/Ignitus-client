import React from 'react';
import * as S from '../styles';
import { NavDropdown } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-navDropdown/Components';
import { options, name } from '../constants';
import { Heading1 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceNavDropdown = () => (
  <S.Container>
    <Heading1> Dashboard Nav DropDown</Heading1>
    <br />
    <S.Component>
      <NavDropdown options={options} name={name} />
    </S.Component>
  </S.Container>
);
