import React from 'react';
import * as S from '../styles';
import { Opportunity, Cardtypes } from '../types';
import { Paragraph } from '../../../ignitus-Atoms/typography';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export const InfoCard = ({ location, commitment, salary }: Cardtypes) => {
  const [buttonText, setButtonText] = React.useState(<div> Apply </div>);
  const handleClick = e => {
    setButtonText(
      <div>
        <S.Icon name={AppIcon.CheckIcon} /> Applied
      </div>,
    );
  };
  return (
    <S.Container>
      <Card title="Location" description={location} />
      <Card title="Commitment" description={commitment} />
      <Card title="Salary" description={salary} />
      <S.ButtonsWrapper>
        <S.Button size="large" category="primary" onClick={handleClick}>
          {' '}
          {buttonText}{' '}
        </S.Button>
        <S.Button size="large" category="secondary">
          {' '}
          Save{' '}
        </S.Button>
        <S.Button size="large" category="grey">
          <S.Icon name={AppIcon.ShareIcon} /> Share Link{' '}
        </S.Button>
      </S.ButtonsWrapper>
    </S.Container>
  );
};

const Card = ({ title, description }: Opportunity) => (
  <S.Wrapper>
    <S.Heading>{title}</S.Heading>
    <br />
    <Paragraph> {description} </Paragraph>
  </S.Wrapper>
);
