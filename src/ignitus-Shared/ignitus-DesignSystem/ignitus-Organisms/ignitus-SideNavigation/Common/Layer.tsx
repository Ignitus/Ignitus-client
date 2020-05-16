import React from 'react';

import { Paragraph, IgnitusBlue } from '../../../../index';
import * as S from './styles';
import { LayerProps } from './types';

export const CommonLayer: React.FC<LayerProps> = ({
  text,
  border = true,
  marginTop = false,
  marginBottom = false,
  append,
  prepend,
  ...rest
}) => (
  <S.Layer
    border={border}
    marginTop={marginTop}
    marginBottom={marginBottom}
    containIcon={!!prepend}
    {...rest}
  >
    {!!prepend && prepend}
    <Paragraph color={IgnitusBlue}>{text}</Paragraph>
    {!!append && append}
  </S.Layer>
);
