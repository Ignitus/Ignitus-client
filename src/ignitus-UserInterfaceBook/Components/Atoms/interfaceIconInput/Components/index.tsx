import React from 'react';
import styled from '@emotion/styled';
import {
  Heading2,
  Heading4,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

import {DefaultIconInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultIconInput/Components';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';
import {Interface} from '../../../../styles';
import {GreyLight} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

const CustomDefaultIconInput = styled(DefaultIconInput)`
  background: ${GreyLight};
  border: 1px solid ${GreyLight};
  flex-direction: row-reverse;

  svg {
    margin-right: 0.4rem;
  }
`;

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
    />
    <br />
    <br />
    <Heading4>Publication Details</Heading4>
    <CustomDefaultIconInput
      name={AppIcon.PdfIcon}
      type="string"
      placeholder="Give your publication a title..."
      handleChange={handleChange}
    />
  </Interface>
);
