import React from 'react';
import {
  InternshipCard,
  PostsPageCards,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-PostsPageCards/Components';
import * as S from '../styles';

export const InterfacePostsPageCards = () => (
  <S.Container>
    <S.Container>
      <InternshipCard
        ImageLink=""
        Title="Donald Kunkel "
        Position="Research Analyst"
        Company="adsfs"
        Place="Spain"
      />
    </S.Container>
    <S.Container>
      <PostsPageCards
        ImageLink=""
        Title="Donald Kunkel "
        Description="fkjbk jsfb kgj bjkgb gjkbjkb kjb gjkbjglsb lgbglkbsgkl bglg"
        type="publication"
      />
    </S.Container>
    <S.Container>
      <PostsPageCards
        ImageLink=""
        Title="Donald Kunkel "
        Description="fkjbk jsfb kgj bjkgb gjkbjkb kjb gjkbjglsb lgbglkbsgkl bglg"
        type="video"
      />
    </S.Container>
  </S.Container>
);
