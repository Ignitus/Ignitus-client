import React from 'react';
import {InputTypes} from '../types';
import {AppIcon} from '../../../../types/iconsTypes/enums';
import * as I from '../styles';

const DefaultIconInput = ({placeholder, type, name}: InputTypes) => (
  <React.Fragment>
    <I.InputContainer>
      <I.Input> https://goo.gl/HEp5FW </I.Input >
      <I.StyledIcon name={AppIcon.CopyIcon} />
    </I.InputContainer>
  </React.Fragment>
);

export default DefaultIconInput;
