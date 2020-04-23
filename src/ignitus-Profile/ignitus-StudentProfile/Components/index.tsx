import React, {Fragment} from 'react';
import * as P from '../styles';
import {
  AboutProps,
  EducationProps,
  HeadingProps,
  RecommendationsProps,
} from '../types';
import {
  AppIcon,
  Black,
  ButtonBottomRight,
  GreySecondaryText,
  Paragraph,
  RoundedButton,
} from '../../../ignitus-Shared';

export const StudentProfile = () => (
  <P.ParentContainer>
    <P.TopSection>
      <ButtonBottomRight size="large" category="primary">
        {' '}
        Edit Profile
      </ButtonBottomRight>
    </P.TopSection>
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
      </P.ElementContainer>

      <P.ElementContainer>
        <Heading title="Research Fields" icon={AppIcon.LocalLibraryIcon} />
        <P.Content>
          <RoundedButton size="medium" category="grey">
            Psycholinguistics{' '}
          </RoundedButton>
          <RoundedButton size="medium" category="grey">
            Modernist Literature{' '}
          </RoundedButton>
        </P.Content>
      </P.ElementContainer>

      <P.ElementContainer>
        <Heading title="Publications" icon={AppIcon.LibraryBooksIcon} />
        <P.Content>
          <Heading
            title="Shakespeare and Elizabethan Poetry: A Study of His Earlier Work in Relation to the Poetry of the Time."
            icon={AppIcon.PdfIcon}
            fontStyle="paragraph"
          />
          <Heading
            title="Practice in a second language: Perspectives from applied linguistics and cognitive psychology."
            icon={AppIcon.PdfIcon}
            fontStyle="paragraph"
          />
        </P.Content>
      </P.ElementContainer>

      <P.ElementContainer>
        <Heading title="Contributions" icon={AppIcon.ContributionIcon} />
        <P.Content>
          <P.ContributionsWrapper>
            <Heading
              title="5 Articles"
              icon={AppIcon.LibraryBooksIcon}
              fontStyle="paragraph"
            />
            <Heading
              title="5 Polls"
              icon={AppIcon.PollIcon}
              fontStyle="paragraph"
            />
            <Heading
              title="2 Publications"
              icon={AppIcon.PdfIcon}
              fontStyle="paragraph"
            />
            <Heading
              title="3 Videos"
              icon={AppIcon.VideoLibIcon}
              fontStyle="paragraph"
            />
          </P.ContributionsWrapper>
        </P.Content>
      </P.ElementContainer>

      <RecommendationsSection
        name="Nicholas Young"
        designation="Professor"
        date="December 19, 2018"
        experience="I worked with Sophia in a research paper, for 2 years. She has the ability to understand toughest things effortlessly that skill often takes time to develop, but it seemed to come perfectly naturally to her. It's my privilege to recommend her even I found myself lucky that I got a chance to be in touch with Sophia."
      />
    </P.MiddleSection>
    <P.BottomSection>
      <RoundedButton size="medium" category="grey">
        Download as PDF
      </RoundedButton>
    </P.BottomSection>
  </P.ParentContainer>
);

const Heading = ({title, icon, fontStyle}: HeadingProps) => (
  <P.TitleWrapper>
    <P.Icon name={icon} />
    <P.Title fontStyle={fontStyle}>{title}</P.Title>
  </P.TitleWrapper>
);

const About = ({content}: AboutProps) => (
  <Fragment>
    <Heading title="About" icon={AppIcon.InfoIcon} />
    <P.Content>
      <Paragraph color={GreySecondaryText}>{content}</Paragraph>
    </P.Content>
  </Fragment>
);

const Education = ({university, address, batch}: EducationProps) => (
  <Fragment>
    <Heading title="Education" icon={AppIcon.GraduationCapIcon} />
    <P.Content>
      <P.University color={Black}>{university}</P.University>
      <P.Address>{address}</P.Address>
      <P.Date>{batch}</P.Date>
    </P.Content>
  </Fragment>
);

const RecommendationsSection = ({
  name,
  designation,
  date,
  experience,
}: RecommendationsProps) => (
  <P.ElementContainer>
    <Heading title="Recommendations" icon={AppIcon.StarCircleIcon} />
    <P.Content>
      <P.RecommendationsRow>
        <P.LeftRow>
          <P.Avatar src="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png" />
          <div>
            <P.Name>{name}</P.Name>
            <P.Designation>{designation}</P.Designation>
            <P.Date>{date}</P.Date>
          </div>
        </P.LeftRow>
        <P.RightRow>
          <Paragraph color={GreySecondaryText}>{experience}</Paragraph>
        </P.RightRow>
      </P.RecommendationsRow>
    </P.Content>
  </P.ElementContainer>
);
