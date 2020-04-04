import React from 'react';
import {Button} from '../../buttons';
import {StyledIcon} from '../styles';

const DefaultButtonWithIcon = ({size, category, name, content}) => (
  <React.Fragment>
    <Button size={size} category={category}>
      {content} <StyledIcon name={name} category={category} size={size}/>
    </Button>
  </React.Fragment>
); 

export default DefaultButtonWithIcon;
