import React from 'react';
import { CheckBoxType } from '../types';
import { CheckBox } from '../styles';

const DefaultCheckbox = ({label, value}: CheckBoxType) => (
  <React.Fragment>
    <CheckBox type="checkbox" id={label} name={label} value={value} />
    <label htmlFor={label}>{label}</label>
  </React.Fragment>
);

export default DefaultCheckbox;
