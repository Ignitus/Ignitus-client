import React from 'react';
import {InputTypes} from '../types';
import {AppIcon} from '../../../../types/iconsTypes/enums';
import * as I from '../styles';

const DefaultSearchInput = ({placeholder, type, name}: InputTypes) => (
  <React.Fragment>
    <I.InputContainer>
      <I.StyledIcon name={AppIcon.SearchIcon} />
      <I.Input placeholder={placeholder} type={type} name={name} />
    </I.InputContainer>
  </React.Fragment>
);

export default DefaultSearchInput;
