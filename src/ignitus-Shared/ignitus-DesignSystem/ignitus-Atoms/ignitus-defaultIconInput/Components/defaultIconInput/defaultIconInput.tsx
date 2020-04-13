import React, {useState} from 'react';
import * as I from '../../styles';
import {DefaultIconInputProperties} from '../../types';

const DefaultIconInput = ({
  placeholder,
  type,
  name,
  handleClick,
  handleChange,
  ...rest
}: DefaultIconInputProperties) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <I.InputContainer {...rest}>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            setValue(e.target.value);
            handleChange(value);
          }}
        />
        <I.StyledIcon
          name={name}
          onClick={() => (handleClick ? handleClick(value) : null)}
        />
      </I.InputContainer>
    </React.Fragment>
  );
};

export default DefaultIconInput;
