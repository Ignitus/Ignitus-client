import React from 'react';
import * as S from '../styles';
import {
  Heading5,
  Heading6,
  Paragraph,
} from '../../../ignitus-Atoms/typography';
import { CardTypes, CardProps } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
/* eslint-disable react/destructuring-assignment */

export const InternshipCard = ({
  ImageLink,
  Title,
  Position,
  Company,
  Place,
  JobType,
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
        <Paragraph>
          {' '}
          {JobType === 'remote' ? (
            <S.Icon size="small" name={AppIcon.RemoteJobIcon} />
          ) : (
            <S.Icon size="small" name={AppIcon.LocationIcon} />
          )}{' '}
          {Place}
        </Paragraph>
      </S.Column>
    </S.Content>
  </Card>
);

export const PublicationCard = ({
  ImageLink,
  Title,
  Description,
  type,
}: CardProps) => (
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
        {
          {
            publication: <S.Icon name={AppIcon.PdfIcon} />,
            video: <S.Icon name={AppIcon.VideoLibIcon} />,
          }[type]
        }

        <Paragraph> {Description}</Paragraph>
      </S.Row>
    </S.Content>
  </Card>
);

const Card = props => (
  <S.Container>
    {props.children}
    <S.IconsDiv>
      <Heading6>
        <S.Icon size="small" name={AppIcon.LikeIcon} /> Like
      </Heading6>
      <Heading6>
        <S.Icon size="small" name={AppIcon.SavePlusIcon} /> Save
      </Heading6>
      <Heading6>
        <S.Icon size="small" name={AppIcon.ShareIcon} /> Share
      </Heading6>
    </S.IconsDiv>
  </S.Container>
);
