import React, {useState} from 'react';
import * as I from '../styles';
import {InputTypes} from '../types';

const DefaultPublicationInput = ({
  placeholder,
  type,
  name,
}: InputTypes) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <I.InputContainer>
      <I.StyledIcon name={name}/>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </I.InputContainer>
    </React.Fragment>
  );
};

export default DefaultPublicationInput;
