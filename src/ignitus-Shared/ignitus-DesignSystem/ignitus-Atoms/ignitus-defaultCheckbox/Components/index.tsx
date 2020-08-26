import React from 'react';
import { CheckBoxType } from '../types';
import { CheckBox, Label, StyledParagraph, Container } from '../styles';

export const DefaultCheckbox = ({
  label,
  value,
  size,
  ...rest
}: CheckBoxType) => (
  <Container {...rest}>
    <CheckBox type="checkbox" id={label} name={label} value={value} />
    <Label htmlFor={label}>
      <StyledParagraph size={size}>{label}</StyledParagraph>
    </Label>
  </Container>
);
