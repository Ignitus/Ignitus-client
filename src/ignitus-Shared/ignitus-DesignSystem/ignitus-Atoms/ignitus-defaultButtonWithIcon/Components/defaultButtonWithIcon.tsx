import React from 'react';
import {PrimaryButtonWithIcon, StyledIcon} from '../styles';

const DefaultButtonWithIcon = ({name, content}) => (
  <React.Fragment>
    <PrimaryButtonWithIcon>
      {content}
      <StyledIcon name={name} />
    </PrimaryButtonWithIcon>
  </React.Fragment>
);

export default DefaultButtonWithIcon;
