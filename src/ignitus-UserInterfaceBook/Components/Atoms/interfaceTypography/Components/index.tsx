import React from 'react';
import {TypographyContainer} from '../styles';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  TextLink,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceTypography: React.FC = () => (
  <TypographyContainer>
    <Heading3>Typography ★</Heading3>
    <hr />
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
    <Heading5>Heading 5</Heading5>
    <Heading6>Heading 6</Heading6>
    <Paragraph>Paragraph</Paragraph>
    <TextLink>Text Link</TextLink>
  </TypographyContainer>
);
