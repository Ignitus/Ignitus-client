/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  WelcomeContainer,
  TopSection,
  Progress,
} from '../../ignitus-WelcomeFlow/Styles/style';

import * as P from '../Styles/style';
import { EducationProps, HeadingProps } from '../types';
import {
  Heading2,
  withErrorBoundary,
  AppIcon,
  Black,
  Paragraph,
  RoundedButton,
  Heading5,
  IgnitusBlue,
  White,
  DefaultButtonWithIcon,
  GreyThree,
} from '../../../../ignitus-Shared';

import { DefaultTag2 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultTag/Components';

import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

export const DetailsProfileFlow: FunctionComponent = withErrorBoundary(() => (
  <WelcomeContainer>
    <TopSection>
      <Progress
        src="https://storage.googleapis.com/ignitus_assets/ig-assets/progressSix.png"
        alt="progress-bar"
      />
      <Heading2>Profile Details</Heading2>
      <Paragraph> This won&apos;t take much time to complete.</Paragraph>
      <P.TopMiddleSection>
        <P.MiddleSection>
          <P.ElementContainer>
            <About />
          </P.ElementContainer>

          <P.ElementContainer>
            <Education
              university="Graham Junior College"
              address="New Parkland,CA"
              batch="2015 – 2019"
            />
          </P.ElementContainer>

          <P.ElementContainer>
            <Heading title="Research Fields" icon={AppIcon.LocalLibraryIcon} />
            <P.Content>
              <P.StyledArea>
                <DefaultTag2
                  label="Literature"
                  color={IgnitusBlue}
                  background={White}
                />
                <DefaultTag2
                  label="Psycholinguistics"
                  color={IgnitusBlue}
                  background={White}
                />
              </P.StyledArea>
            </P.Content>
          </P.ElementContainer>

          <P.ElementContainer>
            <P.HeadingContainer>
              <Heading title="Publications" icon={AppIcon.LibraryBooksIcon} />
              <P.IconContainer>
                <P.Icon
                  name={AppIcon.PlusIcon}
                  color={C.White}
                  background={C.IgnitusBlue}
                />
                <Paragraph>Add a Publication</Paragraph>
              </P.IconContainer>
            </P.HeadingContainer>
            <P.Content>
              <DefaultButtonWithIcon
                size="large"
                category="primary"
                name={AppIcon.SaveIcon}
                content="Upload file &nbsp;"
              />
              <DefaultTag2
                label="publication_report.pdf"
                color={IgnitusBlue}
                background={GreyThree}
              />

              <P.StyledDefaultIconInput
                placeholder="Give your publication a title..."
                type="text"
                name={AppIcon.PdfIcon}
                state=""
                handleChange={handleChange}
                handleClick={copy}
              />
              <P.LeftRow>
                <Heading
                  title="Practice in a second language: Perspectives from applied linguistics and cognitive psychology."
                  icon={AppIcon.LibraryBooksIcon}
                  fontStyle="paragraph"
                />
                <P.RightRow>
                  <P.Icon
                    name={AppIcon.CreateIcon}
                    color={C.IgnitusBlue}
                    background={C.White}
                  />{' '}
                  <P.Icon
                    name={AppIcon.CrossIcon}
                    color={C.IgnitusBlue}
                    background={C.White}
                  />
                </P.RightRow>
              </P.LeftRow>
              <P.LeftRow>
                <Heading
                  title="Practice in a second language: Perspectives from applied linguistics and cognitive psychology."
                  icon={AppIcon.LibraryBooksIcon}
                  fontStyle="paragraph"
                />
                <P.RightRow>
                  <P.Icon
                    name={AppIcon.CreateIcon}
                    color={C.IgnitusBlue}
                    background={C.White}
                  />{' '}
                  <P.Icon
                    name={AppIcon.CrossIcon}
                    color={C.IgnitusBlue}
                    background={C.White}
                  />
                </P.RightRow>
              </P.LeftRow>
            </P.Content>
          </P.ElementContainer>
        </P.MiddleSection>
      </P.TopMiddleSection>
    </TopSection>
    <P.BottomSection>
      <RoundedButton size="large" category="primary">
        <Link to="/">Get started</Link>
      </RoundedButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </P.BottomSection>
  </WelcomeContainer>
));

const Heading = ({ title, icon, fontStyle }: HeadingProps) => (
  <P.TitleWrapper>
    <P.Icon name={icon} color={C.IgnitusBlue} background={C.White} />
    <P.Title fontStyle={fontStyle}>{title}</P.Title>
  </P.TitleWrapper>
);

const About = () => (
  <Fragment>
    <Heading title="About" icon={AppIcon.InfoIcon} />
    <P.Content>
      <P.StyledTextArea
        rows={4}
        cols={100}
        placeholder="Write something about yourself, what you are good at or hobbies"
      />
    </P.Content>
  </Fragment>
);

const Education = ({ university, address, batch }: EducationProps) => (
  <Fragment>
    <P.HeadingContainer>
      <Heading title="Education" icon={AppIcon.GraduationCapIcon} />
      <P.IconContainer>
        <P.Icon
          name={AppIcon.PlusIcon}
          color={C.White}
          background={C.IgnitusBlue}
        />{' '}
        <Paragraph>Add an Institution</Paragraph>
      </P.IconContainer>
    </P.HeadingContainer>
    <P.Content>
      <P.InputContainer>
        <P.StyledDefaultInput
          placeholder="University or Institution"
          type="text"
          name="university"
        />{' '}
        <P.StyledDefaultInput
          placeholder="Type or Degree"
          type="text"
          name="degree"
        />{' '}
        <P.StyledDefaultInput
          placeholder="Field of Study"
          type="text"
          name="study"
        />
      </P.InputContainer>
      <P.DateContainer>
        <Heading5>from</Heading5>
        <P.StyledIconInput
          placeholder="year"
          type="text"
          name={AppIcon.KeyBoardArrowDown}
          state=""
          handleChange={handleChange}
          handleClick={copy}
        />
        <Heading5>to</Heading5>
        <P.StyledIconInput
          placeholder="year"
          type="text"
          name={AppIcon.KeyBoardArrowDown}
          state=""
          handleChange={handleChange}
          handleClick={copy}
        />
        <P.StyledDefaultCheckbox
          label="I am currently studying here"
          value="to"
        />
      </P.DateContainer>
      <P.LeftRow>
        <P.University color={Black}>{university}</P.University>
        <P.RightRow>
          <P.Icon
            name={AppIcon.CreateIcon}
            color={C.IgnitusBlue}
            background={C.White}
          />{' '}
          <P.Icon
            name={AppIcon.CrossIcon}
            color={C.IgnitusBlue}
            background={C.White}
          />
        </P.RightRow>
      </P.LeftRow>
      <P.Address>{address}</P.Address>
      <P.Date>{batch}</P.Date>
    </P.Content>
  </Fragment>
);
