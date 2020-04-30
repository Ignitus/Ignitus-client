import * as React from 'react';
import * as S from '../styles';
import { Basictypes} from '../types';
import {
  Heading4 ,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {RoundedButton} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import building from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Svg/building.svg';
import manAtDesk from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Svg/manAtDesk.svg';
import developer from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Svg/developer.svg';
import pcSocial from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Svg/pcSocial.svg';
import takingNotes from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Svg/takingNotes.svg';
import {
  Benefits,
  BuildingContent,
  Design,
  Marketing,
  Openings,
  Operations,
  Others,
  Software,
  WhyContent,
} from '../constants';

export const CareersPage = () => (
  <S.Container>
    <S.TopSection>
      <S.Heading color="white">Do the Most Meaningful Work of Your Career</S.Heading>
      <br/><br/>
      <RoundedButton color="white" size="large"> We're Hiring </RoundedButton>
    </S.TopSection>

    <WhySection
    title="Why Ignitus?"
    />

    <BuildingSection
      title="What we're building"
      imgLink={building}
    />

    <S.Section>
      <S.Wrapper>
        <S.Heading > Benefits and Perks</S.Heading >
      </S.Wrapper>
      <S.FlexRow>
        {Benefits.map((x: any) => (
          <BenefitElement
            content={x.content}
            imgLink={x.imgLink}
          />
        ))}
      </S.FlexRow>
    </S.Section>

    <S.Section>
      <S.Wrapper>
        <S.Heading>Open Jobs</S.Heading > <br/>
        {Openings.map((x: any)=>(
          <S.Wrapper>
          <Heading4 >{x.content}</Heading4 >
          </S.Wrapper>
        ))};
      </S.Wrapper>

      <S.FlexRow >
        <S.Wrapper  flex="1">
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Design</S.Paragraph>
          </S.Wrapper>
          <br/>
          {Design.map((x:any)=> (
            <S.Wrapper align="left">
              <Heading4  key={x.content}>
                {x.content} <br/>
              </Heading4 >
            </S.Wrapper>
          ))}
        </S.Wrapper>

        <S.Wrapper flex="1">
          <img
            src={manAtDesk}
          />
        </S.Wrapper>
      </S.FlexRow>

      <S.FlexRow direction="row-reverse">
        <S.Wrapper flex="1">
          <S.Wrapper align="left">
            <S.Paragraph weight="bold">Software Engineering</S.Paragraph>
          </S.Wrapper>
          <br/>
          {Software.map((x:any)=> (
            <S.Wrapper align="left">
              <Heading4  key={x.content}>
                {x.content} <br/>
              </Heading4 >
            </S.Wrapper>
          ))}
        </S.Wrapper>
        <S.Wrapper flex="1">
          <img
            src={developer}
          />
        </S.Wrapper>
      </S.FlexRow>

      <S.FlexRow>
          <S.Wrapper flex="1">
            <S.Wrapper align="left">
              <S.Paragraph weight="bold">Marketing</S.Paragraph>
            </S.Wrapper>
            <br/>
            {Marketing.map((x:any)=> (
              <S.Wrapper align="left">
                <Heading4  key={x.content}>
                  {x.content} <br/>
                </Heading4 >
              </S.Wrapper>
            ))}
          </S.Wrapper>
        <S.Wrapper flex="1">
          <img
            src={pcSocial}
          />
        </S.Wrapper>
      </S.FlexRow>

      <S.FlexRow direction="row-reverse">
          <S.Wrapper  flex="1">
            <S.Wrapper align="left">
              <S.Paragraph weight="bold">Others</S.Paragraph>
            </S.Wrapper>
            <br/>
            {Others.map((x:any)=> (
              <S.Wrapper align="left">
                <Heading4  key={x.content}>
                  {x.content} <br/>
                </Heading4 >
              </S.Wrapper>
            ))}
            <br/>
            <S.Wrapper align="left">
              <S.Paragraph weight="bold">Operations</S.Paragraph>
            </S.Wrapper>
            <br/>
            {Operations.map((x:any)=> (
              <S.Wrapper align="left">
                <Heading4  key={x.content}>
                  {x.content} <br/>
                </Heading4 >
              </S.Wrapper>
            ))}
          </S.Wrapper>
        <S.Wrapper flex="1">
          <img
            src={takingNotes}
          />
        </S.Wrapper>

      </S.FlexRow>
    </S.Section>
  </S.Container>
);

const WhySection = ({title,}: Basictypes) => (
  <S.Section>
    <S.Wrapper>
      <S.Heading >{title}</S.Heading >
    </S.Wrapper>
    <S.Wrapper>
      {WhyContent.map((x: any) => (
        <S.Paragraph>{x.content}<br/><br/></S.Paragraph>
      ))};
    </S.Wrapper>
  </S.Section>
);

const BuildingSection = ({title,imgLink}: Basictypes) => (
  <S.Section>
    <S.FlexRow >
      <S.Wrapper flex="1" >
          <img
            src={imgLink}
          />
      </S.Wrapper>
      <S.Wrapper flex="1"  >
          <S.Wrapper align="left">
            <S.Heading >{title}</S.Heading >
          </S.Wrapper>
        {BuildingContent.map((x: any)=> (
          <S.Wrapper align="left" >
            <S.Paragraph>{x.content}<br/><br/></S.Paragraph>
          </S.Wrapper>
        ))};

      </S.Wrapper>
    </S.FlexRow>
  </S.Section>
);

const BenefitElement = ({content,imgLink}: Basictypes) => (
  <S.BenefitWrapper>
    <S.Wrapper align="left">
      <img
        src={imgLink}
      />
    </S.Wrapper>
    <S.Wrapper align="left">
        <S.Paragraph>{content}</S.Paragraph>
    </S.Wrapper>
  </S.BenefitWrapper>
);


