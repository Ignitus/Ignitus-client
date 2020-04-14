import React, {useState, useEffect} from 'react';
import * as I from '../../styles';
import {DefaultIconInputProperties} from '../../types';

const DefaultIconInput = ({
  placeholder,
  type,
  name,
  handleClick,
  handleChange,
  state,
  ...rest
}: DefaultIconInputProperties) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return (
    <React.Fragment>
      <I.InputContainer {...rest}>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={e => {
            setValue(e.target.value);
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
