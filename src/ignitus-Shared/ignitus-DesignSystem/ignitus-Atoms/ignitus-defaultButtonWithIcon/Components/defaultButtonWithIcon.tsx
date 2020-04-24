import React from 'react';
import {Button} from '../../buttons';
import {StyledIcon} from '../styles';
import {BtnProps} from '../types';

const DefaultButtonWithIcon = ({
  size,
  category,
  name,
  content,
  ...rest
}: BtnProps) => (
  <Button size={size} category={category} {...rest}>
    {content} <StyledIcon name={name} category={category} size={size} />
  </Button>
);

export default DefaultButtonWithIcon;
