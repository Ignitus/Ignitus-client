import React, {Fragment} from 'react';
import Team from '../../ignitus-Team';
import CoreTeam from '../../ignitus-CoreTeam';
import {withErrorBoundary} from '../../../ignitus-Shared/Components/errorBoundary';
import * as t from '../constants';
import * as S from '../Styles';
import * as T from '../../../ignitus-Shared/Components/emotionStyles/shared';

const About = () => (
  <Fragment>
    <S.AboutSection>
      <S.AboutContainer>
        <S.TopSection>
          <S.PictureContainer>
            <S.Img src={t.aboutImg} alt="aboutus" />
          </S.PictureContainer>
          <S.ContentContainer>
            <S.Title> About Us</S.Title>
            <S.ParagraphContainer>
              {t.IgnitusIntro.map((x: any) => (
                <T.Paragraph key={x.title}>{x.title}</T.Paragraph>
              ))}
            </S.ParagraphContainer>
          </S.ContentContainer>
        </S.TopSection>
      </S.AboutContainer>
      <CoreTeam.components.CoreTeam />
      <Team.containers.TeamContainer />
    </S.AboutSection>
  </Fragment>
);

export default withErrorBoundary(About);
