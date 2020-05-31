import React from 'react';
import {
  InternshipCard,
  PostsPageCards,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-PostsPageCards/Components';
import * as S from '../styles';
import { CardInfo } from '../constants';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const InterfacePostsPageCards = () => (
  <S.Container>
    <Heading2> DashboardCards </Heading2>
    <br />
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
            <S.Container key={title}>
              <InternshipCard
                ImageLink={imageLink}
                Title={title}
                Position={position}
                Place={place}
                Company={company}
                JobType={jobType}
              />
            </S.Container>
          ),
          publication: (
            <S.Container key={title}>
              <PostsPageCards
                ImageLink={imageLink}
                Title={title}
                Description={description}
                type={type}
              />
            </S.Container>
          ),
          video: (
            <S.Container key={title}>
              <PostsPageCards
                ImageLink={imageLink}
                Title={title}
                Description={description}
                type={type}
              />
            </S.Container>
          ),
          basic: (
            <S.Container key={title}>
              <PostsPageCards
                ImageLink={imageLink}
                Title={title}
                Description={description}
                type={type}
              />
            </S.Container>
          ),
        }[type]),
    )}
  </S.Container>
);
