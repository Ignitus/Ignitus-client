import React from 'react';
import * as P from '../styles';
import { AppIcon } from '../../../ignitus-Shared/types/iconsTypes/iconEnums';
import { ButtonBottomRight, RoundedButton } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {
  AboutProps,
  ContributionsProps,
  EducationProps,
  HeadingProps,
  PublicationsProps,
  RecommendationsProps,
} from '../types';

const ProfileDetailView = () => (
  <P.MainContainer>

    <P.TopSection>
          <ButtonBottomRight size="large" category="primary" > Edit Profile</ButtonBottomRight>
    </P.TopSection>
    <P.MainSection>

      <AboutSection
        content="Well-versed in over a dozen literary genres and can teach to any range of students. Adept at creating a lesson plan that engages students helping students to see the beauty in literature and encouraging students to read on their own. Specializes in high school and junior college level classes."
      />

      <EducationSection
        university="Graham Junior College"
        address="New Parkland,CA"
        batch="2015 – 2019"
      />

      <P.ElementContainer>
        <HeadingIconContent heading="Research Fields" icon={AppIcon.LocalLibraryIcon}/>
        <P.ContentContainer>
          <RoundedButton size="medium" category="grey">Psycholinguistics </RoundedButton>
          <RoundedButton size="medium" category="grey">Modernist Literature  </RoundedButton>
        </P.ContentContainer>
      </P.ElementContainer>

      <P.ElementContainer>
        <HeadingIconContent heading="Publications" icon={AppIcon.LibraryBooksIcon}/>
        <P.ContentContainer>
          <PublicationsIconContent
            content="Shakespeare and Elizabethan Poetry: A Study of His Earlier Work in Relation to the Poetry of the Time"
          />
          <PublicationsIconContent
            content="Practice in a second language: Perspectives from applied linguistics and cognitive psychology"
          />
        </P.ContentContainer>

      </P.ElementContainer>

      <ContributionsSection
        articles="5"
        polls="5"
        publications="2"
        videos="3"
      />

      <RecommendationsSection
        name= "Nicholas Young"
        designation="Professor"
        date="December 19, 2018"
        experience="I worked with Sophia in a research paper, for 2 years. She has the ability to understand toughest things effortlessly that skill often takes time to develop, but it seemed to come perfectly naturally to her. It's my privilege to recommend her even I found myself lucky that I got a chance to be in touch with Sophia."
      />

    </P.MainSection>
    <P.BottomSection>
      <RoundedButton size="medium" category="grey" >Download as PDF</RoundedButton>
    </P.BottomSection>
  </P.MainContainer>
);

const HeadingIconContent = ({ heading, icon }: HeadingProps) => (
  <P.HeadingWrapper>
    <P.HeadingStyledIcon name={icon} />
    <P.HeadingText >{heading}</P.HeadingText>
  </P.HeadingWrapper>
);

const AboutSection = ({ content }: AboutProps) => (
  <P.ElementContainer>
  <HeadingIconContent heading="About" icon={AppIcon.InfoIcon}/>
  <P.ContentContainer>
    <P.AboutWrapper>
      <P.About >{content}</P.About>
    </P.AboutWrapper>
  </P.ContentContainer>
  </P.ElementContainer>
);

const EducationSection = ({ university, address, batch }: EducationProps) => (
  <P.ElementContainer>
    <HeadingIconContent heading="Education" icon={AppIcon.GraduationCapIcon}/>
    <P.ContentContainer>
      <P.EducationWrapper>
        <P.University>{university}</P.University>
        <P.Address>{address}</P.Address>
        <P.Batch>{batch}</P.Batch>
      </P.EducationWrapper>
    </P.ContentContainer>
  </P.ElementContainer>
);

const PublicationsIconContent = ({ content }: PublicationsProps) => (
  <P.PublicationsWrapper>
    <P.PublicationsIconWrapper>
    <P.PublicationsStyledIcon name={AppIcon.PdfIcon} />
    </P.PublicationsIconWrapper>
    <P.PublicationsText >{content}</P.PublicationsText>
  </P.PublicationsWrapper>
);

const ContributionsSection = ({ articles, polls,publications,videos }: ContributionsProps) => (

  <P.ElementContainer>
    <HeadingIconContent heading="Contributions" icon={AppIcon.ContributionIcon}/>
    <P.ContentContainer>
    <P.ContributionsWrapper>
      <P.ContributionsContainer>
        <P.ContributionsIconWrapper>
          <P.ContributionsStyledIcon name={AppIcon.LibraryBooksIcon} />
        </P.ContributionsIconWrapper>
        <P.ContributionsText > {articles} Articles</P.ContributionsText>
      </P.ContributionsContainer>
      <P.ContributionsContainer>
        <P.ContributionsIconWrapper>
          <P.ContributionsStyledIcon name={AppIcon.PollIcon} />
        </P.ContributionsIconWrapper>
        <P.ContributionsText >{polls} Polls</P.ContributionsText>
      </P.ContributionsContainer>
      <P.ContributionsContainer>
        <P.ContributionsIconWrapper>
          <P.ContributionsStyledIcon name={AppIcon.PdfIcon} />
        </P.ContributionsIconWrapper>
        <P.ContributionsText >{publications} Publications</P.ContributionsText>
      </P.ContributionsContainer>
      <P.ContributionsContainer>
        <P.ContributionsIconWrapper>
          <P.ContributionsStyledIcon name={AppIcon.VideoLibIcon} />
        </P.ContributionsIconWrapper>
        <P.ContributionsText >{videos} Videos</P.ContributionsText>
      </P.ContributionsContainer>
    </P.ContributionsWrapper>
    </P.ContentContainer>
  </P.ElementContainer>
);

const RecommendationsSection = ({ name, designation, date, experience }: RecommendationsProps) => (
  <P.ElementContainer>
    <HeadingIconContent heading="Recommendations" icon={AppIcon.StarCircleIcon}/>
    <P.ContentContainer>
    <P.RecommendationsWrapper>
      <P.RecommendationsProfile>
        <P.RecommendationsAvatar/>
        <P.RecommendationsDetails>
          <P.Name>{name}</P.Name>
          <P.Designation>{designation}</P.Designation>
          <P.Date>{date}</P.Date>
        </P.RecommendationsDetails>
      </P.RecommendationsProfile>
      <P.Experience>{experience}</P.Experience>
    </P.RecommendationsWrapper>
    </P.ContentContainer>
  </P.ElementContainer>
);


export default ProfileDetailView;
