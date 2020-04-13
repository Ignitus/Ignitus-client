import React from 'react';
import { InputTypes } from '../types';
import { StyledTag1, StyledTag2, StyledTag3, StyledTag4, StyledIcon } from '../styles';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export const DefaultTag1 = ({ label }: InputTypes) => (
  <React.Fragment>
    <span style={StyledTag1}>{ label }</span>
  </React.Fragment>
);

export const DefaultTag2 = ({ label }: InputTypes) => (
  <React.Fragment>
    <span style={StyledTag2}><StyledIcon style={{"fill": "#000066", "margin": "0 5px"}} name={AppIcon.CrossIcon} />{ label }</span>
  </React.Fragment>
);

export const DefaultTag3 = ({ label }: InputTypes) => (
  <React.Fragment>
    <span style={StyledTag3}>{ label }<StyledIcon style={{"fill": "#fff", "margin": "0 5px"}} name={AppIcon.CrossIcon} /></span>
  </React.Fragment>
);

export const DefaultTag4 = ({ label }: InputTypes) => (
  <React.Fragment>
    <span style={StyledTag4}>{ label }<StyledIcon style={{"fill": "#A9A9A9", "margin": "0 5px"}} name={AppIcon.CrossIcon} /></span>
  </React.Fragment>
);
