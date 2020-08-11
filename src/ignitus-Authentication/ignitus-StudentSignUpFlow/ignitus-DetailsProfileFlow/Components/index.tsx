/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent, Fragment } from 'react';

import {
  WelcomeContainer,
  TopSection,
} from '../../ignitus-WelcomeFlow/Styles/style';

import * as P from '../style';
import { EducationProps, HeadingProps } from '../types';
import {
  Heading2,
  withErrorBoundary,
  AppIcon,
  Black,
  Heading5,
  IgnitusBlue,
  White,
  DefaultButtonWithIcon,
  GreyThree,
} from '../../../../ignitus-Shared';

import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

export const ProfileDetailsFlow: FunctionComponent = withErrorBoundary(() => (
  <WelcomeContainer>
    <TopSection>
      <Heading2>Profile Details</Heading2>
      <P.SubTitle> This won&apos;t take much time to complete.</P.SubTitle>
      <P.InfoSection>
        <P.Section>
          <About />
        </P.Section>
        <P.Section>
          <EducationSection
            university="Graham Junior College"
            address="New Parkland,CA"
            batch="2015 – 2019"
          />
        </P.Section>
        <P.Section>
          <Heading title="Research Fields" icon={AppIcon.LocalLibraryIcon} />
          <P.StyledArea>
            <P.StyledDefaultTag2
              label="Literature"
              color={IgnitusBlue}
              background={White}
            />
            <P.StyledDefaultTag2
              label="Psycholinguistics"
              color={IgnitusBlue}
              background={White}
            />
          </P.StyledArea>
          <P.StyledText>Separate fields with commas.</P.StyledText>
        </P.Section>
        <P.Section>
          <P.HeadingContainer>
            <Heading title="Publications" icon={AppIcon.LibraryBooksIcon} />
            <P.IconContainer>
              <P.Icon
                name={AppIcon.PlusIcon}
                color={C.White}
                background={C.IgnitusBlue}
                size="1.5rem"
              />
              <P.StyledParagraph>Add a Publication</P.StyledParagraph>
            </P.IconContainer>
          </P.HeadingContainer>
          <P.PublicationInput>
            <P.PublicationInputRow>
              <DefaultButtonWithIcon
                size="medium"
                category="primary"
                name={AppIcon.SaveIcon}
                content="Upload file &nbsp;"
              />
              <P.StyledDefaultTag2
                label="publication_report.pdf"
                color={IgnitusBlue}
                background={GreyThree}
              />
            </P.PublicationInputRow>
            <div>
              <P.StyledDefaultIconInput
                placeholder="Give your publication a title..."
                type="text"
                name={AppIcon.PdfIcon}
                state=""
                width="19rem"
                handleChange={handleChange}
                handleClick={copy}
              />
            </div>
          </P.PublicationInput>
          <P.Publication>
            <Heading
              title="Practice in a second language: Perspectives from applied linguistics and cognitive psychology."
              icon={AppIcon.PdfIcon}
              fontStyle="paragraph"
            />
            <div>
              <P.Icon
                name={AppIcon.CreateIcon}
                color={C.IgnitusBlue}
                background={C.White}
                size="1.5rem"
              />{' '}
              <P.Icon
                name={AppIcon.CrossIcon}
                color={C.IgnitusBlue}
                background={C.White}
                size="1.5rem"
              />
            </div>
          </P.Publication>
        </P.Section>
      </P.InfoSection>
    </TopSection>
  </WelcomeContainer>
));

const Heading = ({ title, icon, fontStyle }: HeadingProps) => (
  <P.HeadingWrapper>
    <P.Icon
      name={icon}
      color={C.IgnitusBlue}
      background={C.White}
      size="2rem"
    />
    <P.Title fontStyle={fontStyle}>{title}</P.Title>
  </P.HeadingWrapper>
);

const About = () => (
  <Fragment>
    <Heading title="About" icon={AppIcon.InfoIcon} />
    <P.StyledTextArea
      rows={2}
      cols={100}
      placeholder="Write something about yourself, what you are good at or hobbies"
    />
  </Fragment>
);

const EducationSection = ({ university, address, batch }: EducationProps) => (
  <Fragment>
    <P.HeadingContainer>
      <Heading title="Education" icon={AppIcon.GraduationCapIcon} />
      <P.IconContainer>
        <P.Icon
          name={AppIcon.PlusIcon}
          color={C.White}
          background={C.IgnitusBlue}
          size="1.5rem"
        />{' '}
        <P.StyledParagraph>Add an Institution</P.StyledParagraph>
      </P.IconContainer>
    </P.HeadingContainer>
    <div>
      <P.StyledDefaultInput
        placeholder="University or Institution"
        type="text"
        name="university"
        width="26rem"
      />{' '}
      <br />
      <P.StyledDefaultInput
        placeholder="Type or Degree"
        type="text"
        name="degree"
        width="12rem"
      />{' '}
      <P.StyledDefaultInput
        placeholder="Field of Study"
        type="text"
        name="study"
        width="12rem"
      />
    </div>
    <P.DateContainer>
      <Heading5>from</Heading5>
      <P.StyledIconInput
        placeholder="year"
        type="text"
        name={AppIcon.KeyBoardArrowDown}
        state=""
        width="50px"
        handleChange={handleChange}
        handleClick={copy}
      />
      <Heading5>to</Heading5>
      <P.StyledIconInput
        placeholder="year"
        type="text"
        name={AppIcon.KeyBoardArrowDown}
        state=""
        width="50px"
        handleChange={handleChange}
        handleClick={copy}
      />
      <P.StyledDefaultCheckbox
        label="I am currently studying here"
        value="to"
      />
    </P.DateContainer>

    <P.EducationInfo>
      <P.Circle />
      <P.UniversityInfo color={Black}>{university}</P.UniversityInfo>
      <div>
        <P.Icon
          name={AppIcon.CreateIcon}
          color={C.IgnitusBlue}
          background={C.White}
          size="1.5rem"
        />{' '}
        <P.Icon
          name={AppIcon.CrossIcon}
          color={C.IgnitusBlue}
          background={C.White}
          size="1.5rem"
        />
      </div>
    </P.EducationInfo>
    <P.Address>{address}</P.Address>
    <P.Date>{batch}</P.Date>
  </Fragment>
);
