import React, {Fragment} from 'react';
import Team from '../../ignitus-Team';
import CoreTeam from '../../ignitus-CoreTeam';
import { IgnitusIntroduction, AboutImage } from '../constants';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import * as S from '../styles';

const About: React.FunctionComponent = () => (
  <Fragment>
    <S.AboutSection>
      <S.AboutContainer>
        <S.TopSection>
          <S.PictureContainer>
            <S.Img src={AboutImage} alt="aboutus" />
          </S.PictureContainer>
          <S.ContentContainer>
            <S.Title> About Us</S.Title>
            <S.ParagraphContainer>
              {IgnitusIntroduction.map((x: any) => (
                <S.Paragraph key={x.title}>{x.title}</S.Paragraph>
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
