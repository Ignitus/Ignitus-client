import React from 'react';
import {StyledHeading2, StyledHeading4, StyledHeading6} from '../../../ignitus-UserInterfaceBook/styles';
import * as C from '../styles';
import {AppIcon} from '../../../ignitus-Shared/types/iconsTypes/iconEnums';
import {
  ButtonBottomRight,
  RoundedButton,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {AboutContent} from '../styles';


const ProfileDetailView = () => (
  <C.Container1>

    <C.Container2>
          <ButtonBottomRight size="large" category="primary" > Edit Profile</ButtonBottomRight>
    </C.Container2>
    <C.Container3>
      <C.ElementContainer>
        <C.HeadingContainer>
          <C.StyledIcon name={AppIcon.InfoIcon} />
          <C.NameContainer>
            <StyledHeading2>About</StyledHeading2>
          </C.NameContainer>
        </C.HeadingContainer>

        <C.ContentContainer>
          <AboutContent
            placeholder='Well-versed in over a dozen literary genres and can teach to any range of students. Adept at creating a lesson plan that engages students helping students to see the beauty in literature and encouraging students to read on their own. Specializes in high school and junior college level classes.'
            rows={3}
          />

        </C.ContentContainer>
      </C.ElementContainer>

      <C.ElementContainer>
        <C.HeadingContainer>
          <C.StyledIcon name={AppIcon.GraduationCapIcon} />
          <C.NameContainer>
            <StyledHeading2>Education</StyledHeading2>
          </C.NameContainer>
        </C.HeadingContainer>

        <C.ContentContainer>
          <StyledHeading6>
            <C.Education1
              placeholder='Graham Junior College'
              type='text'
            />
          </StyledHeading6>

          <StyledHeading4>
            <C.Education2
              placeholder='New Parkland,CA'
              type='text'
              />
          </StyledHeading4>

          <StyledHeading4>
            <C.Education3
              placeholder=' 2015 – 2019 '
              type='text'
            />
          </StyledHeading4>

        </C.ContentContainer>

      </C.ElementContainer>

      <C.ElementContainer>
        <C.HeadingContainer>
          <C.StyledIcon name={AppIcon.LocalLibraryIcon} />
          <C.NameContainer>
            <StyledHeading2>Research Fields </StyledHeading2>
          </C.NameContainer>
        </C.HeadingContainer>

        <C.ContentContainer>
          <RoundedButton size="medium" category="grey">Psycholinguistics </RoundedButton>
          <RoundedButton size="medium" category="grey">Modernist Literature  </RoundedButton>
        </C.ContentContainer>

      </C.ElementContainer>

      <C.ElementContainer>
        <C.HeadingContainer>
          <C.StyledIcon name={AppIcon.LibraryBooksIcon} />
          <C.NameContainer>
            <StyledHeading2> Publications </StyledHeading2>
          </C.NameContainer>
        </C.HeadingContainer>

        <C.ContentContainer>
          <C.Publication>
            <C.PubStyledIcon name={AppIcon.PdfIcon} />
            <C.PubInput
              placeholder='Shakespeare and Elizabethan Poetry: A Study of His Earlier Work in Relation to the Poetry of the Time'
              //type='text'
            />
          </C.Publication>
          <C.Publication>
            <C.PubStyledIcon name={AppIcon.PdfIcon} />
            <C.PubInput
              placeholder={'Practice in a second language: Perspectives from applied linguistics and cognitive psychology'}
              //type='text'
            />
          </C.Publication>
        </C.ContentContainer>

      </C.ElementContainer>

      <C.ElementContainer>
        <C.HeadingContainer>
          <C.StyledIcon name={AppIcon.ContributionIcon} />
          <C.NameContainer>
            <StyledHeading2>Contributions </StyledHeading2>
          </C.NameContainer>
        </C.HeadingContainer>

        <C.ContentContainer>
          <C.ContriContent>

            <C.ContriElement>
              <C.ContriStyledIcon name={AppIcon.LibraryBooksIcon} />
              <C.ContriInput
                placeholder=' 5'
                type='number'
              />
              Articles
            </C.ContriElement>

            <C.ContriElement>
              <C.ContriStyledIcon name={AppIcon.PollIcon} />
              <C.ContriInput
                placeholder=' 5'
                type='number'
              />
              Polls
            </C.ContriElement>
            <C.ContriElement>
              <C.ContriStyledIcon name={AppIcon.PdfIcon} />
              <C.ContriInput
                placeholder=' 5'
                type='number'
              />
              Publications
            </C.ContriElement>
            <C.ContriElement>
              <C.ContriStyledIcon name={AppIcon.VideoLibIcon} />
              <C.ContriInput
                placeholder=' 5'
                type='number'
              />
              Videos
            </C.ContriElement>
          </C.ContriContent>
        </C.ContentContainer>

      </C.ElementContainer>

      <C.ElementContainer>
        <C.HeadingContainer>
          <C.StyledIcon name={AppIcon.StarCircleIcon} />
          <C.NameContainer>
            <StyledHeading2>Recommendations</StyledHeading2>
          </C.NameContainer>
        </C.HeadingContainer>

        <C.ContentContainer>
          <C.RecommendContent1>
            <C.RecommendAvatar
              src={"../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/StudentProfileView.png"}
              alt={"Avatar"}
            />
            <C.RecommendContent2>
               <C.RecommendInput1 placeholder={'Nicholas Young'} type={'text'} />
             <C.RecommendInput2 placeholder={'Professor'} type={'text'}/>
              <C.RecommendInput3 placeholder={'December 19, 2018'} type={'text'}/>
            </C.RecommendContent2>
            <C.RecommendPara
              placeholder={'I worked with Sophia in a research paper, for 2 years. She has the ability to understand toughest things effortlessly that skill often takes time to develop, but it seemed to come perfectly naturally to her. It\'s my privilege to recommend her even I found myself lucky that I got a chance to be in touch with Sophia.'}
              rows={5}
            />
          </C.RecommendContent1>
        </C.ContentContainer>
      </C.ElementContainer>
    </C.Container3>
    <C.ButtonDiv>
      <RoundedButton size="small" category="grey" >Download as PDF</RoundedButton>
    </C.ButtonDiv>
  </C.Container1>
);


export default ProfileDetailView;
