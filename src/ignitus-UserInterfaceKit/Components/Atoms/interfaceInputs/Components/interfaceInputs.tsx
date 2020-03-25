import React from 'react';
import {InputContainer} from '../styles';
import {StyledHeading2} from '../../../../styles';
import {
  InputField1
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/input';

const interfaceInputs = () => (
  <InputContainer>
  <StyledHeading2>Input Fields ★</StyledHeading2>
  <hr />
    <InputField1 placeholder="First Name" type="text" />
  </InputContainer>
);

export default interfaceInputs;