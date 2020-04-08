import React from 'react';
import {StyledHeading2, StyledHeading4, StyledHeading6} from '../../../ignitus-UserInterfaceBook/styles';
import * as P from '../styles';
import {AppIcon} from '../../../ignitus-Shared/types/iconsTypes/iconEnums';
import {
  ButtonBottomRight,
  RoundedButton,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {AboutContent} from '../styles';


const ProfileDetailView = () => (
  <P.Container1>

    <P.Container2>
          <ButtonBottomRight size="large" category="primary" > Edit Profile</ButtonBottomRight>
    </P.Container2>
    <P.Container3>
      <P.ElementContainer>
        <P.HeadingContainer>
          <P.StyledIcon name={AppIcon.InfoIcon} />
          <P.NameContainer>
            <StyledHeading2>About</StyledHeading2>
          </P.NameContainer>
        </P.HeadingContainer>

        <P.ContentContainer>
          <AboutContent
            placeholder="Well-versed in over a dozen literary genres and can teach to any range of students. Adept at creating a lesson plan that engages students helping students to see the beauty in literature and encouraging students to read on their own. Specializes in high school and junior college level classes."
            rows={3}
          />

        </P.ContentContainer>
      </P.ElementContainer>

      <P.ElementContainer>
        <P.HeadingContainer>
          <P.StyledIcon name={AppIcon.GraduationCapIcon} />
          <P.NameContainer>
            <StyledHeading2>Education</StyledHeading2>
          </P.NameContainer>
        </P.HeadingContainer>

        <P.ContentContainer>
          <StyledHeading6>
            <P.Education1
              placeholder="Graham Junior College"
              type="text"
            />
          </StyledHeading6>

          <StyledHeading4>
            <P.Education2
              placeholder="New Parkland,CA"
              type="text"
              />
          </StyledHeading4>

          <StyledHeading4>
            <P.Education3
              placeholder=" 2015 – 2019 "
              type="text"
            />
          </StyledHeading4>

        </P.ContentContainer>

      </P.ElementContainer>

      <P.ElementContainer>
        <P.HeadingContainer>
          <P.StyledIcon name={AppIcon.LocalLibraryIcon} />
          <P.NameContainer>
            <StyledHeading2>Research Fields </StyledHeading2>
          </P.NameContainer>
        </P.HeadingContainer>

        <P.ContentContainer>
          <RoundedButton size="medium" category="grey">Psycholinguistics </RoundedButton>
          <RoundedButton size="medium" category="grey">Modernist Literature  </RoundedButton>
        </P.ContentContainer>

      </P.ElementContainer>

      <P.ElementContainer>
        <P.HeadingContainer>
          <P.StyledIcon name={AppIcon.LibraryBooksIcon} />
          <P.NameContainer>
            <StyledHeading2> Publications </StyledHeading2>
          </P.NameContainer>
        </P.HeadingContainer>

        <P.ContentContainer>
          <P.Publications>
            <P.PublicationsStyledIcon name={AppIcon.PdfIcon} />
            <P.PublicationsInput
              placeholder="Shakespeare and Elizabethan Poetry: A Study of His Earlier Work in Relation to the Poetry of the Time"
            />
          </P.Publications>
          <P.Publications>
            <P.PublicationsStyledIcon name={AppIcon.PdfIcon} />
            <P.PublicationsInput
              placeholder="Practice in a second language: Perspectives from applied linguistics and cognitive psychology"
            />
          </P.Publications>
        </P.ContentContainer>

      </P.ElementContainer>

      <P.ElementContainer>
        <P.HeadingContainer>
          <P.StyledIcon name={AppIcon.ContributionIcon} />
          <P.NameContainer>
            <StyledHeading2>Contributions </StyledHeading2>
          </P.NameContainer>
        </P.HeadingContainer>

        <P.ContentContainer>
          <P.ContributionsContent>

            <P.ContributionsElement>
              <P.ContributionsStyledIcon name={AppIcon.LibraryBooksIcon} />
              <P.ContributionsInput
                placeholder=" 5"
                type="number"
              />
              Articles
            </P.ContributionsElement>

            <P.ContributionsElement>
              <P.ContributionsStyledIcon name={AppIcon.PollIcon} />
              <P.ContributionsInput
                placeholder=" 5"
                type="number"
              />
              Polls
            </P.ContributionsElement>
            <P.ContributionsElement>
              <P.ContributionsStyledIcon name={AppIcon.PdfIcon} />
              <P.ContributionsInput
                placeholder=" 5"
                type="number"
              />
              Publications
            </P.ContributionsElement>
            <P.ContributionsElement>
              <P.ContributionsStyledIcon name={AppIcon.VideoLibIcon} />
              <P.ContributionsInput
                placeholder=" 5"
                type="number"
              />
              Videos
            </P.ContributionsElement>
          </P.ContributionsContent>
        </P.ContentContainer>

      </P.ElementContainer>

      <P.ElementContainer>
        <P.HeadingContainer>
          <P.StyledIcon name={AppIcon.StarCircleIcon} />
          <P.NameContainer>
            <StyledHeading2>Recommendations</StyledHeading2>
          </P.NameContainer>
        </P.HeadingContainer>

        <P.ContentContainer>
          <P.RecommendationsContent1>
            <P.RecommendationsAvatar
              src="../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/StudentProfileView.png"
              alt="Avatar"
            />
            <P.RecommendationsContent2>
               <P.RecommendationsInput1 placeholder="Nicholas Young" type="text" />
             <P.RecommendationsInput2 placeholder="Professor" type="text"/>
              <P.RecommendationsInput3 placeholder="December 19, 2018" type="text"/>
            </P.RecommendationsContent2>
            <P.RecommendationsMainInput
              placeholder="I worked with Sophia in a research paper, for 2 years. She has the ability to understand toughest things effortlessly that skill often takes time to develop, but it seemed to come perfectly naturally to her. It\'s my privilege to Recommendations her even I found myself lucky that I got a chance to be in touch with Sophia."
              rows={5}
            />
          </P.RecommendationsContent1>
        </P.ContentContainer>
      </P.ElementContainer>
    </P.Container3>
    <P.ButtonDiv>
      <RoundedButton size="small" category="grey" >Download as PDF</RoundedButton>
    </P.ButtonDiv>
  </P.Container1>
);


export default ProfileDetailView;
