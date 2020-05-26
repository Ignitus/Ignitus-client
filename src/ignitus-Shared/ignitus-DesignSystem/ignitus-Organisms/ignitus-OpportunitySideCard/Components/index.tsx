import React from 'react';
import * as S from '../styles';
import { Opportunity, Cardtypes } from '../types';
import { Paragraph } from '../../../ignitus-Atoms/typography';
import ShareIcon from '../../../ignitus-Assets/ignitus-Images/img-Png/share.png';

export const InfoCard = ({ location, commitment }: Cardtypes) => (
  <S.Container>
    <Card title="Location" description={location} />
    <Card title="Commitment" description={commitment} />
    <S.ButtonsWrapper>
      <S.Button size="large" category="primary">
        {' '}
        Apply{' '}
      </S.Button>
      <S.Button size="large" category="secondary">
        {' '}
        Save{' '}
      </S.Button>
      <S.Button size="large" category="grey">
        <img
          src={ShareIcon}
          alt="Share icon"
          style={{ marginRight: '0.7rem' }}
        />{' '}
        Share Link{' '}
      </S.Button>
    </S.ButtonsWrapper>
  </S.Container>
);

const Card = ({ title, description }: Opportunity) => (
  <S.Wrapper>
    <S.Heading>{title}</S.Heading>
    <br />
    <Paragraph> {description} </Paragraph>
  </S.Wrapper>
);
