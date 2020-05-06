import styled from '@emotion/styled';
import React, { useState } from 'react';
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

export const DefaultToggleButton1: React.FC<InputTypes1> = ({
  leftLabel,
  rightLabel,
  categoryLeft,
  categoryRight,
}) => {
  const [left, setLeft] = useState('primary');
  const [right, setRight] = useState('grey');

  const swapCategory = () => {
    [categoryLeft, categoryRight] = [categoryRight, categoryLeft];
    setLeft(`${categoryLeft}`);
    setRight(`${categoryRight}`);
  };

  return (
    <ToggleButton1 onClick={swapCategory}>
      <ButtonLeft size="medium" category={left}>
        {' '}
        {leftLabel}{' '}
      </ButtonLeft>
      <ButtonRight size="medium" category={right}>
        {' '}
        {rightLabel}{' '}
      </ButtonRight>
    </ToggleButton1>
  );
};

export const DefaultToggleButton2: React.FC<InputTypes2> = ({
  leftIcon,
  rightIcon,
  categoryLeft,
  categoryRight,
}) => {
  const [left, setLeft] = useState('grey');
  const [right, setRight] = useState('white');

  const swapCategory = () => {
    [categoryLeft, categoryRight] = [categoryRight, categoryLeft];
    setLeft(`${categoryLeft}`);
    setRight(`${categoryRight}`);
  };

  return (
    <ToggleButton2 onClick={swapCategory}>
      <ButtonLeft size="medium" category={left}>
        <StyledIcon color={C.IgnitusBlue} name={leftIcon} />
      </ButtonLeft>
      <ButtonRight size="medium" category={right}>
        <StyledIcon color={C.IgnitusBlue} name={rightIcon} />
      </ButtonRight>
    </ToggleButton2>
  );
};
