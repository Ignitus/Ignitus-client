import React, {useState} from 'react';
import styled from '@emotion/styled';
import * as I from '../../styles';
import {DefaultPasswordInputProperties} from '../../types';
import {IgnitusBlue, GreyLight, White} from '../../../colors';
import {Icon} from '../../../../../../ignitus-HomePage/ignitus-SupportedBy/styles';

// const InputContainer = styled.div`
//   flex-direction: row-reverse;
//   padding: 0;
//   background: ${IgnitusBlue};
//   margin: 1rem 0;
//   border: none;
//   &:hover {
//     border: none;
//   }
// `;

// const Input = styled.input`
//   input {
//     padding: 0.5rem;
//     background: ${White};
//     border: 1px solid ${GreyLight};
//     &:hover {
//       border: 1px solid ${IgnitusBlue};
//     }
//   }
// `;

// const StyledIconOne = styled(Icon)`
//   margin: 0 0.5rem;
//   fill: ${White};
// `;

/* Primarly used to take care of user password! */
export const DefaultPasswordInput = ({
  placeholder,
  type,
  iconOneName,
  iconTwoName,
  handleClick,
  handleChange,
  ...rest
}: DefaultPasswordInputProperties) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <I.InputContainer {...rest}>
        <I.StyledIcon name={iconOneName} />
        <I.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            setValue(e.target.value);
            handleChange(value);
          }}
        />
        <I.StyledIcon name={iconTwoName} onClick={() => handleClick(value)} />
      </I.InputContainer>
    </React.Fragment>
  );
};
