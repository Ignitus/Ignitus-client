import React from 'react';
import styled from '@emotion/styled';
import {
  AppIcon,
  DefaultIconInput,
  GreyLight,
  Heading2,
  Heading4,
  IgnitusBlue,
  White,
} from '../../../../../ignitus-Shared';

import {Interface} from '../../../../styles';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

const CustomDefaultIconInput = styled(DefaultIconInput)`
  flex-direction: row-reverse;
  svg {
    margin-right: 0.4rem;
  }
`;

export const CustomEmailInput = styled(DefaultIconInput)`
  flex-direction: row-reverse;
  padding: 0;
  background: ${IgnitusBlue};
  border: none;
  &:hover {
    border: none;
  }

  input {
    padding: 0.5rem;
    background: ${White};
    border: 1px solid ${GreyLight};
    &:hover {
      border: 1px solid ${IgnitusBlue};
    }
  }
  svg {
    margin: 0 0.5rem;
    fill: ${White};
  }
`;

export const interfaceIconInput = () => (
  <Interface>
    <Heading2>Input with Icon </Heading2>
    <hr />
    <Heading4> Direct link</Heading4>
    <br />
    <DefaultIconInput
      state=""
      name={AppIcon.CopyIcon}
      type="string"
      placeholder="Paste URL Here"
      handleClick={copy}
      handleChange={handleChange}
    />

    <br />
    <br />
    <Heading4>Customized</Heading4>
    <br />
    <CustomDefaultIconInput
      state=""
      name={AppIcon.PdfIcon}
      type="string"
      placeholder="Give your publication a title..."
      handleChange={handleChange}
    />
    <br />
    <br />

    <CustomEmailInput
      state=""
      name={AppIcon.MessageIcon}
      type="string"
      placeholder="Email"
      handleChange={handleChange}
    />
  </Interface>
);
