import * as React from 'react';
import * as S from '../styles';
import { Basictypes } from '../types';

import {
  Benefits,
  BuildingContent,
  Design,
  Marketing,
  Openings,
  Operations,
  Others,
  Software,
} from '../constants';
import { RoundedButton } from '../../ignitus-Shared';

export const CareersPage = () => (
  <S.Container>
    <S.TopSection>
      <S.Heading color="white">
        Do The Most Meaningful Work of Your Career 🎯
      </S.Heading>
      <br />
      <br />
      <RoundedButton size="large" category="secondary">
        {' '}
        We're Hiring{' '}
      </RoundedButton>
    </S.TopSection>
    <MidSection />

    <S.Section>
      <S.Wrapper>
        <S.Heading> Benefits and Perks</S.Heading>
      </S.Wrapper>
      <S.FlexRow>
        {Benefits.map(x => (
          <BenefitElement
            key={x.content}
            content={x.content}
            imgLink={x.imgLink}
          />
        ))}
      </S.FlexRow>
    </S.Section>

    <S.Section>
      <S.Wrapper>
        <S.Heading cursor="pointer">Open Jobs</S.Heading> <br />
        {Openings.map(x => (
          <S.Wrapper key={x.content}>
            <S.Paragraph color="blue">{x.content}</S.Paragraph>
          </S.Wrapper>
        ))}
        ;
      </S.Wrapper>

      <S.FlexRow>
        <S.Wrapper flex="1">
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Design</S.Paragraph>
          </S.Wrapper>
          <br />
          {Design.map(x => (
            <S.Wrapper align="left" key={x.content}>
              <S.Paragraph color="blue" weight="bold">
                {x.content} <br />
              </S.Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>

        <S.Wrapper flex="1">
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarThree.svg"
            alt="Design"
          />
        </S.Wrapper>
      </S.FlexRow>

      <S.FlexRow direction="row-reverse">
        <S.Wrapper flex="1">
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Software Engineering</S.Paragraph>
          </S.Wrapper>
          <br />
          {Software.map(x => (
            <S.Wrapper align="left" key={x.content}>
              <S.Paragraph color="blue" weight="bold">
                {x.content} <br />
              </S.Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper flex="1">
          <S.Img src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarFour.svg" alt="DeveloperImg" />
        </S.Wrapper>
      </S.FlexRow>

      <S.FlexRow>
        <S.Wrapper flex="1">
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Marketing</S.Paragraph>
          </S.Wrapper>
          <br />
          {Marketing.map(x => (
            <S.Wrapper align="left" key={x.content}>
              <S.Paragraph color="blue" weight="bold">
                {x.content} <br />
              </S.Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper flex="1">
          <S.Img src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarFive.svg" alt="MarketingImg" />
        </S.Wrapper>
      </S.FlexRow>

      <S.FlexRow direction="row-reverse">
        <S.Wrapper flex="1">
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Others</S.Paragraph>
          </S.Wrapper>
          <br />
          {Others.map(x => (
            <S.Wrapper align="left" key={x.content}>
              <S.Paragraph color="blue" weight="bold">
                {x.content} <br />
              </S.Paragraph>
            </S.Wrapper>
          ))}
          <br />
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Operations</S.Paragraph>
          </S.Wrapper>
          <br />
          {Operations.map(x => (
            <S.Wrapper align="left" key={x.content}>
              <S.Paragraph color="blue" weight="bold">
                {x.content} <br />
              </S.Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper flex="1">
          <S.Img src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarSix.svg" alt="OperationsImg" />
        </S.Wrapper>
      </S.FlexRow>
    </S.Section>
  </S.Container>
);

const MidSection = () => (
  <S.Section>
    <S.Wrapper>
      <S.Heading>Why Ignitus? 💭</S.Heading>
    </S.Wrapper>
    <S.Wrapper>
      <S.Paragraph>
        We believe that we have the foundation to build something to remember.
      </S.Paragraph>
      <S.Paragraph>
        We are creating an Non-Profit, Open-Source platform with an aim to
        assist scholars in seeking research opportunities. 🎓
      </S.Paragraph>
      <S.Paragraph>
        We all are working together, remotely from different parts of the world
        for the sake of education.
      </S.Paragraph>
    </S.Wrapper>
    <S.FlexRow>
      <S.Wrapper flex="1">
        <S.Img src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarTwo.svg" alt="BuildingImg" />
      </S.Wrapper>
      <S.Wrapper flex="1">
        <S.Wrapper align="left">
          <S.Heading>What we're building? 💭</S.Heading>
        </S.Wrapper>
        {BuildingContent.map(x => (
          <S.Wrapper align="left" key={x.content}>
            <S.Paragraph>{x.content}</S.Paragraph>
          </S.Wrapper>
        ))}
        ;
      </S.Wrapper>
    </S.FlexRow>
  </S.Section>
);

const BuildingSection = ({ title, imgLink }: Basictypes) => (
  <S.Section>
    <S.FlexRow>
      <S.Wrapper flex="1">
        <S.Img src={imgLink} alt="BuildingImg" />
      </S.Wrapper>
      <S.Wrapper flex="1">
        <S.Wrapper align="left">
          <S.Heading>{title}</S.Heading>
        </S.Wrapper>
        {BuildingContent.map(x => (
          <S.Wrapper align="left" key={x.content}>
            <S.Paragraph>{x.content}</S.Paragraph>
          </S.Wrapper>
        ))}
        ;
      </S.Wrapper>
    </S.FlexRow>
  </S.Section>
);

const BenefitElement = ({ content, imgLink }: Basictypes) => (
  <S.BenefitWrapper>
    <S.Wrapper align="left">
      <img src={imgLink} alt="Img" />
    </S.Wrapper>
    <S.Wrapper align="left">
      <S.Paragraph>{content}</S.Paragraph>
    </S.Wrapper>
  </S.BenefitWrapper>
);
