import React from 'react';
import { CheckBoxType } from '../types';
import { CheckBox, Label, StyledParagraph } from '../styles';

export const DefaultCheckbox = ({ label, value }: CheckBoxType) => (
  <React.Fragment>
    <CheckBox type="checkbox" id={label} name={label} value={value} />
    <Label htmlFor={label}>
      <StyledParagraph>{label}</StyledParagraph>
    </Label>
  </React.Fragment>
);
