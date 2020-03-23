import React from 'react';
import { DropDownType } from '../types';

const DefaultDropdown = ({label, options}: DropDownType) => (
  <React.Fragment>
    <label htmlFor={label}>Choose a car:</label>
    <select id={label}>
      {options.map(option => (
        <OptionMapper option={option} />
      ))}
    </select>
  </React.Fragment>
);

const OptionMapper = ({option}) => <option value={option}>{option}</option>;

export default DefaultDropdown;
