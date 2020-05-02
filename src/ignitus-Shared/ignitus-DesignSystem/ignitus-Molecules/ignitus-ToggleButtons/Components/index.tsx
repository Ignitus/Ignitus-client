import styled from '@emotion/styled';
import React from 'react';
import * as B from '../../../ignitus-Atoms/buttons';
import { ToggleButton1, ToggleButton2, StyledIcon } from '../styles';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import * as C from '../../../..';

const ButtonLeft = styled(B.Button)`
  font-weight: 600;
  margin: 0;
  border: 0;
  float: left;
  border-radius: 20px 0 0 20px;
`;

const ButtonRight = styled(B.Button)`
  font-weight: 600;
  margin: 0;
  border: 0;
  float: left;
  border-radius: 0 20px 20px 0;
`;

export const DefaultToggleButton1 = () => (
  <ToggleButton1>
    <ButtonLeft size="medium" category="primary">
      {' '}
      Feed{' '}
    </ButtonLeft>
    <ButtonRight size="medium" category="grey">
      {' '}
      Profile{' '}
    </ButtonRight>
  </ToggleButton1>
);

export const DefaultToggleButton2 = () => (
  <ToggleButton2>
    <ButtonLeft size="medium" category="grey">
      <StyledIcon color={C.IgnitusBlue} name={AppIcon.GridIcon} />
    </ButtonLeft>
    <ButtonRight size="medium" category="white">
      <StyledIcon color={C.IgnitusBlue} name={AppIcon.BarsIcon} />
    </ButtonRight>
  </ToggleButton2>
);
