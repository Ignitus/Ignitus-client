import React from 'react';
import { InputTypes } from '../types';
import { StyledTag, StyledIcon } from '../styles';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import * as C from '../../colors';

export const DefaultTag1 = ({ label, color, background }: InputTypes) => (
  <React.Fragment>
    <StyledTag color={ color } background={ background }>{ label }</StyledTag>
  </React.Fragment>
);

export const DefaultTag2 = ({ label, color, background }: InputTypes) => (
  <React.Fragment>
    <StyledTag color={ color } background={ background }><StyledIcon color={ C.IgnitusBlue } name={AppIcon.CrossIcon} />{ label }</StyledTag>
  </React.Fragment>
);

export const DefaultTag3 = ({ label, color, background }: InputTypes) => (
  <React.Fragment>
    <StyledTag color={ color } background={ background }>{ label }<StyledIcon color={ C.White } name={AppIcon.CrossIcon} /></StyledTag>
  </React.Fragment>
);

export const DefaultTag4 = ({ label, color, background }: InputTypes) => (
  <React.Fragment>
    <StyledTag color={ color } background={ background }>{ label }<StyledIcon color={ C.GreyOne } name={AppIcon.CrossIcon} /></StyledTag>
  </React.Fragment>
);
