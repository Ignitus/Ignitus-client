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
import {
  Paragraph,
  Heading2,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const CareersPage = () => (
  <S.Container>
    <S.TopSection>
      <Heading2 color="white">
        Do The Most Meaningful Work of Your Career 🎯
      </Heading2>
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
        <Heading2> Benefits and Perks</Heading2>
      </S.Wrapper>
      <S.Row>
        {Benefits.map(x => (
          <BenefitElement
            key={x.content}
            content={x.content}
            imgLink={x.imgLink}
          />
        ))}
      </S.Row>
    </S.Section>

    <S.Section>
      <S.Wrapper>
        <Heading2>Open Jobs</Heading2> <br />
        {Openings.map(x => (
          <S.Wrapper key={x.content}>
            <Paragraph>{x.content}</Paragraph>
          </S.Wrapper>
        ))}
        ;
      </S.Wrapper>

      <S.Row>
        <S.Wrapper>
          <S.Wrapper>
            <Paragraph>Design</Paragraph>
          </S.Wrapper>
          <br />
          {Design.map(x => (
            <S.Wrapper key={x.content}>
              <Paragraph>
                {x.content} <br />
              </Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>

        <S.Wrapper>
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarThree.svg"
            alt="Design"
          />
        </S.Wrapper>
      </S.Row>

      <S.Row direction="row-reverse">
        <S.Wrapper>
          <S.Wrapper>
            <Paragraph>Software Engineering</Paragraph>
          </S.Wrapper>
          <br />
          {Software.map(x => (
            <S.Wrapper key={x.content}>
              <Paragraph>
                {x.content} <br />
              </Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper>
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarFour.svg"
            alt="DeveloperImg"
          />
        </S.Wrapper>
      </S.Row>

      <S.Row>
        <S.Wrapper>
          <S.Wrapper>
            <Paragraph>Marketing</Paragraph>
          </S.Wrapper>
          <br />
          {Marketing.map(x => (
            <S.Wrapper key={x.content}>
              <Paragraph>
                {x.content} <br />
              </Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper>
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarFive.svg"
            alt="MarketingImg"
          />
        </S.Wrapper>
      </S.Row>

      <S.Row direction="row-reverse">
        <S.Wrapper>
          <S.Wrapper>
            <Paragraph>Others</Paragraph>
          </S.Wrapper>
          <br />
          {Others.map(x => (
            <S.Wrapper key={x.content}>
              <Paragraph>
                {x.content} <br />
              </Paragraph>
            </S.Wrapper>
          ))}
          <br />
          <S.Wrapper>
            <Paragraph>Operations</Paragraph>
          </S.Wrapper>
          <br />
          {Operations.map(x => (
            <S.Wrapper key={x.content}>
              <Paragraph>
                {x.content} <br />
              </Paragraph>
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper>
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarSix.svg"
            alt="OperationsImg"
          />
        </S.Wrapper>
      </S.Row>
    </S.Section>
  </S.Container>
);

const MidSection = () => (
  <React.Fragment>
    <S.Section>
      <Heading2>Why Ignitus? 💭</Heading2>
      <S.TextContainer>
        <Paragraph>
          We believe that we have the foundation to build something to remember.
        </Paragraph>
        <Paragraph>
          We are creating an Non-Profit, Open-Source platform with an aim to
          assist scholars in seeking research opportunities. 🎓
        </Paragraph>
        <Paragraph>
          We all are working together, remotely from different parts of the
          world for the sake of education.
        </Paragraph>
      </S.TextContainer>
    </S.Section>
    <S.Section>
      <Heading2>What we're building?</Heading2>
      <S.Row direction="row">
        <S.LeftRow>
          <S.Img
            src="https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarTwo.svg"
            alt=""
          />
        </S.LeftRow>
        <S.RightRow>
          <Paragraph>
            An Initiative to help students and professionals get handpicked
            top-quality global research and industrial opportunities 🎯.
          </Paragraph>
          <Paragraph>
            We are creating a global open-source platform where anyone enrolled
            in an undergraduate/postgraduate program at any institution can look
            for opportunities, our unique value proposition is we are devoted to
            educational opportunities with no involvement of any startup,
            companies, etc. we are still in a phase of creating Ignitus our goal
            is to act as an opportunity bridge. 🎓
          </Paragraph>
        </S.RightRow>
      </S.Row>
    </S.Section>
  </React.Fragment>
);

const BuildingSection = ({ title, imgLink }: Basictypes) => (
  <S.Section>
    <S.Row>
      <S.Wrapper>
        <S.Img src={imgLink} alt="BuildingImg" />
      </S.Wrapper>
      <S.Wrapper>
        <S.Wrapper>
          <Heading2>{title}</Heading2>
        </S.Wrapper>
        {BuildingContent.map(x => (
          <S.Wrapper key={x.content}>
            <Paragraph>{x.content}</Paragraph>
          </S.Wrapper>
        ))}
        ;
      </S.Wrapper>
    </S.Row>
  </S.Section>
);

const BenefitElement = ({ content, imgLink }: Basictypes) => (
  <S.BenefitWrapper>
    <S.Wrapper>
      <img src={imgLink} alt="Img" />
    </S.Wrapper>
    <S.Wrapper>
      <Paragraph>{content}</Paragraph>
    </S.Wrapper>
  </S.BenefitWrapper>
);
