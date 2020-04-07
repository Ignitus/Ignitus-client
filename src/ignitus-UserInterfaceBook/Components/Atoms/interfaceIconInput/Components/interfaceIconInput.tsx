import React from 'react';
import {InputContainer} from '../styles';
import {
  Heading3,
  Heading4,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {DefaultIconInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultIconInput/Components';
import {DefaultPublicationInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultPublicationInput/Components';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';

const copy = value => console.log('copied: ', value);

const interfaceIconInput = () => (
  <InputContainer>
    <Heading3>Input with Icon </Heading3>
    <hr />
    <Heading4> Direct link</Heading4>
    <DefaultIconInput
      name={AppIcon.CopyIcon}
      type="string"
      placeholder="Paste URL Here"
      handleClick={copy}
    />
    <br /><br />
    <Heading4> Publications Details</Heading4>
    <DefaultPublicationInput
      name={AppIcon.PdfIcon}
      type="string"
      placeholder="Give your publication a title..."
    />
  </InputContainer>
);

export default interfaceIconInput;
