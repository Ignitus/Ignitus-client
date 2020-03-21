import React from 'react';
import * as T from '../styles';
import {StyledHeading2} from '../../../../styles';
import {TypographyContainer} from '../styles';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';

const interfaceTypography = () => (
  <TypographyContainer>
    <StyledHeading2>Typography ★</StyledHeading2>
    <hr />
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
    <Heading5>Heading 5</Heading5>
    <Heading6>Heading 6</Heading6>
    <Paragraph>Paragraph</Paragraph>
  </TypographyContainer>
);

export default interfaceTypography;
