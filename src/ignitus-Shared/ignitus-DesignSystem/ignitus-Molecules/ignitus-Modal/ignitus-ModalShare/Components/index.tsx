import React from 'react';
import { Heading1, DefaultIconInput } from '../../../../..';
import { ModalShareProps } from '../types';
import { AppIcon } from '../../../../../types/iconsTypes/iconEnums';

import * as O from '../styles';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

export const ModalShare = ({
  title,
  Share,
  Link,
  LinkedinColor,
  TwitterColor,
  RedditColor,
  FacebookColor,
  White,
  GreyOne,
}: ModalShareProps) => (
  <O.ModalShare>
    <O.TopSection>
      <Heading1>{title}</Heading1>
      <O.IconContainer color={White}>
        <O.StyledIcon name={AppIcon.CrossIcon} color={GreyOne} />
      </O.IconContainer>
    </O.TopSection>
    <O.BottomSection>
      <O.Paragraph>{Link}</O.Paragraph>
      <DefaultIconInput
        state=""
        name={AppIcon.CopyIcon}
        type="string"
        width="100px"
        placeholder="Paste URL Here"
        handleClick={copy}
        handleChange={handleChange}
      />
      <O.Paragraph>{Share}</O.Paragraph>
      <O.IconsContainer>
        <O.IconContainer color={FacebookColor}>
          <O.StyledIcon name={AppIcon.FacebookIcon} color={White} />
        </O.IconContainer>
        <O.IconContainer color={RedditColor}>
          <O.StyledIcon name={AppIcon.RedditIcon} color={White} />
        </O.IconContainer>
        <O.IconContainer color={TwitterColor}>
          <O.StyledIcon name={AppIcon.TwitterIcon} color={White} />
        </O.IconContainer>
        <O.IconContainer color={LinkedinColor}>
          <O.StyledIcon name={AppIcon.LinkedInIcon} color={White} />
        </O.IconContainer>
      </O.IconsContainer>
    </O.BottomSection>
  </O.ModalShare>
);
