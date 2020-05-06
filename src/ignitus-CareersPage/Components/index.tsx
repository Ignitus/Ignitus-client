import * as React from 'react';
import * as S from '../styles';

import { PerksObject, OpportunityList } from '../constants';
import { RoundedButton } from '../../ignitus-Shared';
import {
  IgnitusBlue,
  Black,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

import {
  Paragraph,
  Heading2 as Heading,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { PerksType } from '../types';

export const CareersPage = () => (
  <React.Fragment>
    <S.TopSection>
      <Heading color="white">
        Do The Most Meaningful Work of Your Career.{' '}
        <span role="img" aria-label="bullseye">
          🎯
        </span>{' '}
      </Heading>
      <br />
      <br />
      <RoundedButton size="large" category="secondary">
        {' '}
        We&apos;re Hiring{' '}
      </RoundedButton>
    </S.TopSection>
    <S.Section>
      <S.Container>
        <MidSection />
        <BottomSection />
      </S.Container>
    </S.Section>
  </React.Fragment>
);

const MidSection = () => (
  <React.Fragment>
    <S.Section>
      <S.HeadingWrapper>
        <Heading>
          Why Ignitus?{' '}
          <span role="img" aria-label="cloud">
            💭
          </span>{' '}
        </Heading>
      </S.HeadingWrapper>
      <S.TextContainer>
        <S.ParagraphWrapper>
          <Paragraph>
            We believe that we have the foundation to build something to
            remember.
          </Paragraph>
        </S.ParagraphWrapper>
        <S.ParagraphWrapper>
          <Paragraph>
            We are creating an Non-Profit, Open-Source platform with an aim to
            assist scholars in seeking research opportunities.{' '}
            <span role="img" aria-label="hat">
              🎓
            </span>
          </Paragraph>
        </S.ParagraphWrapper>
        <S.ParagraphWrapper>
          <Paragraph>
            We all are working together, remotely from different parts of the
            world for the sake of education.
          </Paragraph>
        </S.ParagraphWrapper>
      </S.TextContainer>
    </S.Section>
    <S.Section>
      <S.Row direction="row">
        <S.LeftRow alignment="center" flex={1}>
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarTwo.svg"
            alt=""
          />
        </S.LeftRow>
        <S.RightRow flex={1}>
          <S.HeadingWrapper alignment="center">
            <Heading>What we&apos;re building?</Heading>
          </S.HeadingWrapper>
          <S.ParagraphWrapper>
            <Paragraph>
              An Initiative to help students and professionals get handpicked
              top-quality global research and industrial opportunities.{' '}
              <span role="img" aria-label="bullsseye">
                🎯
              </span>{' '}
            </Paragraph>
          </S.ParagraphWrapper>

          <S.ParagraphWrapper alignment="center">
            {' '}
            <Paragraph>
              We are creating a global open-source platform where anyone
              enrolled in an undergraduate/postgraduate program at any
              institution can look for opportunities, our unique value
              proposition is we are devoted to educational opportunities with no
              involvement of any startup, companies, etc. we are still in a
              phase of creating Ignitus our goal is to act as an opportunity
              bridge.
            </Paragraph>
          </S.ParagraphWrapper>
        </S.RightRow>
      </S.Row>
    </S.Section>

    <S.Section>
      <S.HeadingWrapper>
        <Heading>
          {' '}
          Benefits & Perks.{' '}
          <span role="img" aria-label="gift">
            🎁
          </span>{' '}
        </Heading>
      </S.HeadingWrapper>
      <S.PerksRow>
        {PerksObject.map(({ content, picture }) => (
          <Perks key={content} content={content} picture={picture} />
        ))}
      </S.PerksRow>
    </S.Section>
  </React.Fragment>
);

const Perks = ({ content, picture }: PerksType) => (
  <S.PerksWrapper>
    <S.PerksImageWrapper>
      <img src={picture} alt="Img" />
    </S.PerksImageWrapper>
    <S.PerksParagraphWrapper alignment="left">
      <Paragraph>{content}</Paragraph>
    </S.PerksParagraphWrapper>
  </S.PerksWrapper>
);

const BottomSection = () => (
  <S.Section>
    <S.HeadingWrapper alignment="center">
      <Heading> Current Opportunities.</Heading>
    </S.HeadingWrapper>

    <S.ParagraphWrapper alignment="center">
      <Paragraph color={IgnitusBlue}>
        {' '}
        We’re looking for people to join the team who are as excited as we are
        to help build the platform that empowers the students.
      </Paragraph>
    </S.ParagraphWrapper>

    <S.OpportunitySection>
      {OpportunityList.map(({ type, openings, picture }, index) => (
        <S.OpportunityWrapper key={type}>
          <S.Row direction={index % 2 === 0 ? 'row-reverse' : 'row'}>
            <S.RightRow>
              <S.ParagraphWrapper key={type} alignment="left">
                <Paragraph color={Black}>{type}</Paragraph>
              </S.ParagraphWrapper>
              {openings.map(({ title }) => (
                <S.ParagraphWrapper key={title} alignment="left">
                  <Paragraph color={IgnitusBlue}>{title}</Paragraph>
                </S.ParagraphWrapper>
              ))}
            </S.RightRow>
            <S.LeftRow>
              <S.Img src={picture} />
            </S.LeftRow>
          </S.Row>
        </S.OpportunityWrapper>
      ))}
    </S.OpportunitySection>
    <br />
    <br />
    <br />
    <S.ParagraphWrapper alignment="center">
      <Paragraph>
        To apply please write an email to team@ignitus.org or apply from{' '}
        <a href="https://angel.co/company/ignitus-2/jobs">here</a>.
      </Paragraph>
    </S.ParagraphWrapper>
  </S.Section>
);
