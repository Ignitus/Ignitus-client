import React from 'react';
import * as S from '../styles';
import { DashboardFooter } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashboardFooter/Components';
import { SideProfileCard } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideProfileCard/Components';
import { DefaultMultiMediaInput } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components/index';
import { DashboardNavigation } from '../../../../ignitus-Shared';
import {
  InternshipCard,
  PostsPageCards,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-PostsPageCards/Components';
import { CardInfo, ProfileCardInfo } from '../constants';
import DashBoardHomeHeader from '../../ignitus-DashboardHomeHeader/Components/index';

function PostsPage() {
  return (
    <S.Container>
      <DashBoardHomeHeader name={ProfileCardInfo.firstname} />
      <S.LeftSection>
        <SideProfileCard
          name={ProfileCardInfo.firstname.concat(ProfileCardInfo.lastname)}
          designation={ProfileCardInfo.designation}
          trackingInformation={ProfileCardInfo.trackingInformation}
        />

        <S.Wrapper>
          <DashboardNavigation />
        </S.Wrapper>
      </S.LeftSection>
      <S.MiddleSection>
        <S.MultiWrapper>
          <DefaultMultiMediaInput
            placeholder="Share an article, poll, document, video, photo, or idea. Use @ to mention someone. "
            name="Input"
          />
        </S.MultiWrapper>
        {CardInfo.map(
          ({
            title,
            imageLink,
            position,
            place,
            company,
            jobType,
            description,
            type,
          }) =>
            ({
              internship: (
                <S.Wrapper key={title}>
                  <InternshipCard
                    ImageLink={imageLink}
                    Title={title}
                    Position={position}
                    Place={place}
                    Company={company}
                    JobType={jobType}
                  />
                </S.Wrapper>
              ),
              publication: (
                <S.Wrapper key={title}>
                  <PostsPageCards
                    ImageLink={imageLink}
                    Title={title}
                    Description={description}
                    type={type}
                  />
                </S.Wrapper>
              ),
              video: (
                <S.Wrapper key={title}>
                  <PostsPageCards
                    ImageLink={imageLink}
                    Title={title}
                    Description={description}
                    type={type}
                  />
                </S.Wrapper>
              ),
            }[type]),
        )}
      </S.MiddleSection>
      <S.RightSection>
        <DashboardFooter />
      </S.RightSection>
    </S.Container>
  );
}
export default PostsPage;
