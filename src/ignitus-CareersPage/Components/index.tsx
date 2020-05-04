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
  <S.Container>
    <S.TopSection>
      <Heading color="white">
        Do The Most Meaningful Work of Your Career 🎯
      </Heading>
      <br />
      <br />
      <RoundedButton size="large" category="secondary">
        {' '}
        We're Hiring{' '}
      </RoundedButton>
    </S.TopSection>
    <MidSection />
    <BottomSection />
  </S.Container>
);

const MidSection = () => (
  <React.Fragment>
    <S.Section>
      <S.HeadingWrapper>
        <Heading>Why Ignitus? 💭</Heading>
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
            assist scholars in seeking research opportunities. 🎓
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
        <S.LeftRow alignment="center">
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarTwo.svg"
            alt=""
          />
        </S.LeftRow>
        <S.RightRow>
          <S.HeadingWrapper alignment="left">
            <Heading>What we're building?</Heading>
          </S.HeadingWrapper>
          <S.ParagraphWrapper>
            <Paragraph>
              An Initiative to help students and professionals get handpicked
              top-quality global research and industrial opportunities 🎯.
            </Paragraph>
          </S.ParagraphWrapper>

          <S.ParagraphWrapper>
            {' '}
            <Paragraph>
              We are creating a global open-source platform where anyone
              enrolled in an undergraduate/postgraduate program at any
              institution can look for opportunities, our unique value
              proposition is we are devoted to educational opportunities with no
              involvement of any startup, companies, etc. we are still in a
              phase of creating Ignitus our goal is to act as an opportunity
              bridge. 🎓
            </Paragraph>
          </S.ParagraphWrapper>
        </S.RightRow>
      </S.Row>
    </S.Section>

    <S.Section>
      <S.HeadingWrapper>
        <Heading> Benefits & Perks. 🎁</Heading>
      </S.HeadingWrapper>
      <S.Row>
        {PerksObject.map(({ content }) => (
          <Perks key={content} content={content} />
        ))}
      </S.Row>
    </S.Section>
  </React.Fragment>
);

const Perks = ({ content }: PerksType) => (
  <S.PerksWrapper>
    <S.Wrapper>
      <img
        src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarOne.svg"
        alt="Img"
      />
    </S.Wrapper>
    <S.ParagraphWrapper alignment="left">
      <Paragraph>{content}</Paragraph>
    </S.ParagraphWrapper>
  </S.PerksWrapper>
);

const BottomSection = () => (
  <S.Section>
    <S.Wrapper>
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
    </S.Wrapper>

    <S.Section>
      {OpportunityList.map(({ type, openings, picture }, index) => (
        <S.OpportunityWrapper>
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
    </S.Section>
  </S.Section>
);

const OpportunityComponent = () => {};
