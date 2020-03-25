import React from 'react';
import { InputType } from '../types'
import { InputContainer } from '../styles';
import { StyledHeading2 } from '../../../../styles';
import {
  DefaultInput
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/input';

const interfaceInputs = ({placeholder, type, name}: InputType) => (
  <InputContainer>
  <StyledHeading2>Input Fields ★</StyledHeading2>
  <hr />
    <DefaultInput placeholder={placeholder||"First Name"} type={type||"text"} name={name||"name"}/>
  </InputContainer>
);

export default interfaceInputs;