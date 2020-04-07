import React, {useState} from 'react';
import * as I from '../styles';
import {InputTypes} from '../types';

const DefaultIconInput = ({
  placeholder,
  type,
  name,
  handleClick,
  position
}: InputTypes) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <I.InputContainer position={position}>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <I.StyledIcon name={name} onClick={() => handleClick(value)} position={position}/>
      </I.InputContainer>
    </React.Fragment>
  );
};

export default DefaultIconInput;
