import React, {useState} from 'react';
import * as I from '../styles';
import {InputTypes} from '../types';

const DefaultIconInput = ({
  placeholder,
  type,
  name,
  handleClick,
}: InputTypes) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <I.InputContainer>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <I.StyledIcon name={name} onClick={() => handleClick(value)} />
      </I.InputContainer>
    </React.Fragment>
  );
};

export default DefaultIconInput;
