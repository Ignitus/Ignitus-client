import React from 'react';
import * as S from '../styles';
import DashboardFooter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashboardFooter/Components';
import { SideProfileCard } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideProfileCard/Components';
import { DefaultMultiMediaInput } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components/index';
import { DashboardNavigation } from '../../../../ignitus-Shared';
import { InternshipCard } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-InternshipCard/Components';

const PostsPage = () => (
  <S.Container>
    <S.LeftSection>
      <SideProfileCard
        name="sfsf"
        designation="adada"
        trackingInformation="afagag"
      />
      <S.Wrapper>
        <DashboardNavigation />
      </S.Wrapper>
    </S.LeftSection>
    <S.MiddleSection>
      <DefaultMultiMediaInput placeholder="adjkafnakjf" name="daaf" />
      <S.Wrapper>
        <InternshipCard
          ImageLink=".."
          Title="Adaf"
          Position="afga"
          Place="aafaf"
          Company="saf"
        />
      </S.Wrapper>
    </S.MiddleSection>
    <S.RightSection>
      <DashboardFooter />
    </S.RightSection>
  </S.Container>
);

export default PostsPage;
