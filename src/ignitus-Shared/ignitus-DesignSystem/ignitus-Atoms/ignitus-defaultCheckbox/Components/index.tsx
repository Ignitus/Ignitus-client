import React from 'react';
import { CheckBoxType } from '../types';
import { CheckBox, Label, StyledParagraph, Container } from '../styles';

export const DefaultCheckbox = ({
  label,
  value,
  height,
  width,
  color,
  size,
}: CheckBoxType) => (
  <Container>
    <CheckBox
      type="checkbox"
      id={label}
      name={label}
      value={value}
      height={height}
      width={width}
    />
    <Label htmlFor={label}>
      <StyledParagraph fontSize={size} color={color}>
        {label}
      </StyledParagraph>
    </Label>
  </Container>
);
