/* eslint-disable import/prefer-default-export */
import React from 'react';
import * as S from '../styles';
import underConstruction from '../../../ignitus-Assets/ignitus-Images/img-Png/underContruction.png';
import {
  Heading3,
  Paragraph,
} from '../../../ignitus-Atoms/atoms';

export const WebsiteUnderConstruction = () => (
  <S.Container>
    <S.Img src={underConstruction} alt="Site Under Build" />
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
