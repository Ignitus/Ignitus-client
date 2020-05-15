import React from 'react';
import { Opportunity } from '../types';
import * as S from '../styles';
import { Heading1, Heading6 } from '../../../ignitus-Atoms/typography';

const OpportunityDetailsCard = ({
  title,
  subtitle,
  description,
  fund,
  src,
}: Opportunity) => (
  <Card
    title={title}
    description={description}
    subtitle={subtitle}
    src={src}
    fund={fund}
  />
);

const Card = ({ title, description, subtitle, src, fund }: Opportunity) => (
  <S.Container>
    <S.LeftRow>
      <img src={src} alt={title} />
    </S.LeftRow>
    <S.RightRow>
      <S.Wrapper marginProp="0rem">
        <Heading1>{title}</Heading1>
      </S.Wrapper>
      <S.Wrapper marginProp="0rem 0.5rem 1rem 0rem">
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.Wrapper>
      <S.Wrapper marginProp="1rem 0.5rem 0rem 0rem">
        <S.Description>{description}</S.Description>
      </S.Wrapper>
      <S.Wrapper marginProp="1rem 2rem">
        <Heading6> $ {fund} funded</Heading6>
      </S.Wrapper>
    </S.RightRow>
  </S.Container>
);

export default OpportunityDetailsCard;
