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

export const PostsPage = () => {
  const [content, setContent] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      {content ? (
        <S.Container>
          <DashBoardHomeHeader
            Skeleton={!content}
            name={ProfileCardInfo.firstname}
          />
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
            <DefaultMultiMediaInput
              placeholder="Share an article, poll, document, video, photo, or idea. Use @ to mention someone. "
              name="Input"
            />

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
                  basic: (
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
      ) : (
        <S.Container>
          <DashBoardHomeHeader
            Skeleton={!content}
            name={ProfileCardInfo.firstname}
          />
          <S.LeftSection>
            <S.SkeletonSideProfile />

            <S.Wrapper>
              <S.SkeletonDashBoardNavigation />
            </S.Wrapper>
          </S.LeftSection>
          <S.MiddleSection>
            <S.SkeletonMulti />
            <S.SkeletonCardsContainer>
              {Array(5)
                .fill(1)
                .map((el, i) => (
                  <S.SkeletonCards key={`array${{ i }}`} />
                ))}
            </S.SkeletonCardsContainer>
          </S.MiddleSection>
          <S.RightSection>
            <S.SkeletonFooter />
          </S.RightSection>
        </S.Container>
      )}
    </React.Fragment>
  );
};
export default PostsPage;
