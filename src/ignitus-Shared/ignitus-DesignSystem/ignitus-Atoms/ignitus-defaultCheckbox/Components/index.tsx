import React from 'react';
import { CheckBoxType } from '../types';
import { CheckBox, Label, StyledParagraph, Container } from '../styles';

export const DefaultCheckbox = ({ label, value }: CheckBoxType) => (
  <Container>
    <CheckBox type="checkbox" id={label} name={label} value={value} />
    <Label htmlFor={label}>
      <StyledParagraph>{label}</StyledParagraph>
    </Label>
  </Container>
);
