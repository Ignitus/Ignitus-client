import React from 'react';
import { InputContainer } from '../styles';
import { DefaultInput } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultInput/Components';
import {
  Heading3,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

const interfaceInput: React.FC = () => (
  <InputContainer>
    <Heading3>Input Fields</Heading3>
    <hr />
    <DefaultInput placeholder={'First Name'} type={'text'} name={'name'}/>
  </InputContainer>
);

export default interfaceInput;
