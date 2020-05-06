import styled from '@emotion/styled';
import React from 'react';
import * as B from '../../../ignitus-Atoms/buttons';
import { ToggleButton1, ToggleButton2, StyledIcon } from '../styles';
import * as C from '../../../..';
import { InputTypes1, InputTypes2 } from '../types';

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

export const DefaultToggleButton1 = ({
  leftLabel,
  rightLabel,
}: InputTypes1) => (
  <ToggleButton1>
    <ButtonLeft size="medium" category="primary">
      {' '}
      {leftLabel}{' '}
    </ButtonLeft>
    <ButtonRight size="medium" category="grey">
      {' '}
      {rightLabel}{' '}
    </ButtonRight>
  </ToggleButton1>
);

export const DefaultToggleButton2 = ({ leftIcon, rightIcon }: InputTypes2) => (
  <ToggleButton2>
    <ButtonLeft size="medium" category="grey">
      <StyledIcon color={C.IgnitusBlue} name={leftIcon} />
    </ButtonLeft>
    <ButtonRight size="medium" category="white">
      <StyledIcon color={C.IgnitusBlue} name={rightIcon} />
    </ButtonRight>
  </ToggleButton2>
);
