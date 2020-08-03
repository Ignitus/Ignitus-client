import React, { useState, useEffect } from 'react';
import * as I from '../../styles';
import { DefaultIconInputProperties } from '../../types';

export const DefaultIconInput = ({
  placeholder,
  type,
  name,
  width = '',
  handleClick,
  handleChange,
  state,
  ...rest
}: DefaultIconInputProperties) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    handleChange(value);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <I.InputContainer {...rest}>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={state}
          width={width}
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
