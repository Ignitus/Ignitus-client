/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as T from '../../ignitus-WelcomeFlow/Styles/style';

import * as P from '../Styles/style';
import { EducationProps, HeadingProps } from '../types';
import {
  Heading2,
  withErrorBoundary,
  AppIcon,
  Black,
  Paragraph,
  RoundedButton,
  DefaultIconInput,
  DefaultInput,
  Heading5,
  IgnitusBlue,
  White,
  DefaultButtonWithIcon,
  GreyThree,
} from '../../../../ignitus-Shared';

import { DefaultTag2 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultTag/Components';

const copy = value => console.log('copied: ', value);
const handleChange = value => console.log('change: ', value);

export const DetailsProfileFlow: FunctionComponent = withErrorBoundary(() => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress
        src="https://storage.googleapis.com/ignitus_assets/ig-assets/progressSix.png"
        alt="progress-bar"
      />
      <Heading2>Profile Details</Heading2>
      <Paragraph> This won&apos;t take much time to complete.</Paragraph>
      <P.TopMiddleSection>
        {/* <P.ParentContainer> */}
        <P.MiddleSection>
          <P.ElementContainer>
            <About content="Well-versed in over a dozen literary genres and can teach to any range of students. Adept at creating a lesson plan that engages students helping students to see the beauty in literature and encouraging students to read on their own. Specializes in high school and junior college level classes." />
          </P.ElementContainer>

          <P.ElementContainer>
            <Education
              university="Graham Junior College"
              address="New Parkland,CA"
              batch="2015 – 2019"
            />
            <P.Icon name={AppIcon.PlusIcon} /> Add an Institution
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
            <Heading title="Publications" icon={AppIcon.LibraryBooksIcon} />
            <P.Icon name={AppIcon.PlusIcon} /> Add a Publication
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
                  <P.Icon name={AppIcon.CreateIcon} />{' '}
                  <P.Icon name={AppIcon.CrossIcon} />
                </P.RightRow>
              </P.LeftRow>

              <P.LeftRow>
                <Heading
                  title="Practice in a second language: Perspectives from applied linguistics and cognitive psychology."
                  icon={AppIcon.LibraryBooksIcon}
                  fontStyle="paragraph"
                />
                <P.RightRow>
                  <P.Icon name={AppIcon.CreateIcon} />{' '}
                  <P.Icon name={AppIcon.CrossIcon} />
                </P.RightRow>
              </P.LeftRow>
            </P.Content>
          </P.ElementContainer>
        </P.MiddleSection>
        {/* </P.ParentContainer> */}
      </P.TopMiddleSection>
    </T.TopSection>
    <P.BottomSection>
      <RoundedButton size="large" category="primary">
        <Link to="/">Get started</Link>
      </RoundedButton>
    </P.BottomSection>
  </T.WelcomeContainer>
));

const Heading = ({ title, icon, fontStyle }: HeadingProps) => (
  <P.TitleWrapper>
    <P.Icon name={icon} />
    <P.Title fontStyle={fontStyle}>{title}</P.Title>
  </P.TitleWrapper>
);

const About = () => (
  <Fragment>
    <Heading title="About" icon={AppIcon.InfoIcon} />
    <P.Content>
      {/* <Paragraph color={GreySecondaryText}>{content}</Paragraph> */}
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
    <Heading title="Education" icon={AppIcon.GraduationCapIcon} />
    <P.Content>
      <P.InputContainer>
        <DefaultInput
          placeholder="University or Institution"
          type="text"
          name="university"
        />
        <DefaultInput placeholder="Type or Degree" type="text" name="degree" />
        <DefaultInput placeholder="Field of Study" type="text" name="study" />
      </P.InputContainer>
      <Heading5>from</Heading5>
      <DefaultIconInput
        placeholder="year"
        type="text"
        name={AppIcon.KeyBoardArrowDown}
        state=""
        handleChange={handleChange}
        handleClick={copy}
      />
      <Heading5>to</Heading5>
      <DefaultIconInput
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
      <P.LeftRow>
        <P.University color={Black}>{university}</P.University>
        <P.RightRow>
          <P.Icon name={AppIcon.CreateIcon} />{' '}
          <P.Icon name={AppIcon.CrossIcon} />
        </P.RightRow>
      </P.LeftRow>
      <P.Address>{address}</P.Address>
      <P.Date>{batch}</P.Date>
    </P.Content>
  </Fragment>
);
