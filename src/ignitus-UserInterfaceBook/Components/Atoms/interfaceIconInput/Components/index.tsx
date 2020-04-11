import React from 'react';

import {
  Heading2,
  Heading4,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

import { DefaultIconInput } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultIconInput/Components';
import { AppIcon } from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';
import { Interface } from '../../../../styles';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

export const interfaceIconInput = () => (
  <Interface>
    <Heading2>Input with Icon </Heading2>
    <hr />
    <Heading4> Direct link</Heading4>
    <DefaultIconInput
      name={AppIcon.CopyIcon}
      type="string"
      placeholder="Paste URL Here"
      handleClick={copy}
      handleChange={handleChange}
      position="row"
    />
    <br />
    <br />
    <Heading4>Publication Details</Heading4>
    <DefaultIconInput
      name={AppIcon.PdfIcon}
      type="string"
      placeholder="Give your publication a title..."
      handleChange={handleChange}
      position="row-reverse"
    />
  </Interface>
);
