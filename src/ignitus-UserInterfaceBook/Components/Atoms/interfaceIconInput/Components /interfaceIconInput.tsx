import React from 'react';
import { InputContainer } from '../styles';
import {
  Heading3,
  Heading6,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {DefaultIconInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultIconInput/Components ';

const interfaceIconInput = () => (
  <InputContainer>
    <Heading3>Input with Icon </Heading3>
    <hr />
    <Heading6> Direct link</Heading6>
    <DefaultIconInput
      placeholder={'Search @user'}
      type={'text'}
      name={'name'}
    />
  </InputContainer>
);

export default interfaceIconInput;
