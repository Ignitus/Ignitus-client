import React from 'react';
import { DropDownType } from '../types';
import * as D from '../styles';

export const DefaultDropdown = ({
  label,
  options,
  display,
  ...rest
}: DropDownType) => (
  <div {...rest}>
    <label htmlFor={label}>{label} *</label>
    <D.Select id={label} display={display}>
      {options.map(option => (
        <OptionMapper key={option} option={option} />
      ))}
    </D.Select>
  </div>
);

const OptionMapper = ({ option }) => <option value={option}>{option}</option>;
