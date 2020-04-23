import React from 'react';
import { InputType } from '../types';
import { Input } from '../styles';

const DefaultInput = ({ placeholder, type, name }: InputType) => (
  <React.Fragment>
    <Input placeholder={placeholder} type={type} name={name} />
  </React.Fragment>
);

export default DefaultInput;
