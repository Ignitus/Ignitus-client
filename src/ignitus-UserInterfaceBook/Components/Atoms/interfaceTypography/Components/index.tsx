import React from 'react';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  TextLink,
} from '../../../../../ignitus-Shared';
import {Interface} from '../../../../styles';

export const interfaceTypography: React.FC = () => (
  <Interface>
    <Heading2>Typography</Heading2>
    <hr />
    <Heading1>Heading 1</Heading1>
    <br />
    <Heading2>Heading 2</Heading2>
    <br />
    <Heading3>Heading 3</Heading3>
    <br />
    <Heading4>Heading 4</Heading4>
    <br />
    <Heading5>Heading 5</Heading5>
    <br />
    <Heading6>Heading 6</Heading6>
    <br />
    <Paragraph>Paragraph</Paragraph>
    <br />
    <TextLink>Text Link</TextLink>
  </Interface>
);
