import React from 'react';
import * as I from '../styles';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';

const DefaultIconInput = () => (
  <React.Fragment>
    <I.InputContainer>
      <I.Input> https://goo.gl/HEp5FW </I.Input>
      <I.StyledIcon name={AppIcon.CopyIcon} />
    </I.InputContainer>
  </React.Fragment>
);

export default DefaultIconInput;
