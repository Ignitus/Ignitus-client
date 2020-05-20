import React from 'react';
import {
  InternshipCard,
  PublicationCard,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-InternshipCard/Components';
import * as S from '../styles';

export const PostsPageCards = () => (
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
      <PublicationCard
        ImageLink=""
        Title="Donald Kunkel "
        Description="fkjbk jsfb kgj bjkgb gjkbjkb kjb gjkbjglsb lgbglkbsgkl bglg"
      />
    </S.Container>
  </S.Container>
);
