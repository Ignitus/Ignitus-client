import React from 'react';
import { InputTypes } from '../types';
import { Input }  from '../styles';

const DefaultSearchInput = ({placeholder, type, name}: InputTypes) => (
  <React.Fragment>
     <Input placeholder = {placeholder} type = {type} name = {name}/>
  </React.Fragment>
);

export default DefaultSearchInput;
