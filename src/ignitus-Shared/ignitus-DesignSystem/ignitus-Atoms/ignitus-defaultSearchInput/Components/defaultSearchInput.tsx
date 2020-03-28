import React from 'react';
import { InputTypes } from '../types';
import { Input, StyledIcon,InputCont }  from '../styles';
import * as I from '../styles';
import SearchIcon from '../../../ignitus-Assets/ignitus-Icons/SearchIcon/searchIcon';
import { AppIcon } from '../../../../types/iconsTypes/enums';


const DefaultSearchInput = ({placeholder, type, name}: InputTypes) => (
  <React.Fragment>
    <I.InputCont>
    <I.StyledIcon name={AppIcon.SearchIcon} />;
     <Input placeholder = {placeholder} type = {type} name = {name} />
     
     </I.InputCont>
  </React.Fragment>
);

export default DefaultSearchInput;
