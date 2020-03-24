import React from 'react';
import { DropDownType } from '../types';
import * as D from '../styles';

const DefaultDropdown = ({label, options, display}: DropDownType) => (
  <React.Fragment>
    <label htmlFor={label}>{label} *</label>
    <D.Select id={label} display={display || ''}>
      {options.map(option => (
        <OptionMapper key={option} option={option} />
      ))}
    </D.Select>
  </React.Fragment>
);

const OptionMapper = ({option}) => <option value={option}>{option}</option>;

export default DefaultDropdown;
