/* eslint-disable import/prefer-default-export */
import React from 'react';
import * as S from '../styles';
import {
  Heading3,
  Paragraph,
} from '../../../ignitus-Atoms/typography';

export const WebsiteUnderConstruction = () => (
  <S.Container>
    <S.Img src="https://storage.googleapis.com/ignitus_assets/ig-assets/underContruction.png" alt="Site Under Build" />
    <S.TextContainer>
      <Heading3>Our site is under maintenance</Heading3>
      <Paragraph>
        We are working on making better experiences for you. 🔨
      </Paragraph>
      <Paragraph>
        We should be back shortly, Thank you for the patience. ☘️
      </Paragraph>
    </S.TextContainer>
  </S.Container>
);
