import React from 'react';
import * as S from '../styles';
import {
  Heading5,
  Heading6,
  Paragraph,
} from '../../../ignitus-Atoms/typography';
import { CardTypes } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
/* eslint-disable react/destructuring-assignment */

export const InternshipCard = ({
  ImageLink,
  Title,
  Position,
  Company,
  Place,
}: CardTypes) => (
  <Card>
    <S.LeftRow>
      <S.Avatar alt="profile" src={ImageLink} />
    </S.LeftRow>
    <S.Content>
      <S.Row>
        <Heading5>{Title}</Heading5>{' '}
        <Paragraph> has posted an internship</Paragraph>
      </S.Row>
      <S.Column>
        <Paragraph>{Position}</Paragraph>
        <Paragraph>{Company}</Paragraph>
        <Paragraph> I {Place}</Paragraph>
      </S.Column>
    </S.Content>
  </Card>
);

export const PublicationCard = ({
  ImageLink,
  Title,
  Description,
}: CardTypes) => (
  <Card>
    <S.LeftRow>
      <S.Avatar alt="profile" src={ImageLink} />
    </S.LeftRow>
    <S.Content>
      <S.Row>
        <Heading5>{Title}</Heading5>{' '}
        <Paragraph> has posted a publication</Paragraph>
      </S.Row>
      <S.Row>
        <S.Icon name={AppIcon.PdfIcon} />
        <Paragraph> {Description}</Paragraph>
      </S.Row>
    </S.Content>
  </Card>
);

const Card = props => (
  <S.Container>
    {props.children}
    <S.IconsDiv>
      <Heading6>I Like</Heading6>
      <Heading6>I Save</Heading6>
      <Heading6>I Share</Heading6>
    </S.IconsDiv>
  </S.Container>
);
