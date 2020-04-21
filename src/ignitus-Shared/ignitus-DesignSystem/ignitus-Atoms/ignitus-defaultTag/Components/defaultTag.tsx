import React from 'react';
import {InputTypes} from '../types';
import {StyledTag, StyledIcon} from '../styles';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';
import * as C from '../../colors';

export const DefaultTag1 = ({
  label,
  color,
  background,
  ...rest
}: InputTypes) => (
  <React.Fragment>
    <StyledTag color={color} background={background} {...rest}>
      {label}
    </StyledTag>
  </React.Fragment>
);

export const DefaultTag2 = ({
  label,
  color,
  background,
  ...rest
}: InputTypes) => (
  <React.Fragment>
    <StyledTag color={color} background={background} {...rest}>
      <StyledIcon color={color} name={AppIcon.CrossIcon} />
      {label}
    </StyledTag>
  </React.Fragment>
);
