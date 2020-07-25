import React, { Fragment } from 'react';
import { IgnitusIntroduction, AboutImage } from '../constants';
import { withErrorBoundary } from '../../../ignitus-Shared';

import { CoreTeam } from '../../ignitus-CoreTeam/Components';
import { default as Team } from '../../ignitus-Team';
import * as S from '../styles';
import { LazyImage } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/Ignitus-LazyImage/Component';

const About: React.FunctionComponent = withErrorBoundary(() => (
  <Fragment>
    <S.AboutSection>
      <S.AboutContainer>
        <S.TopSection>
          <S.PictureContainer>
            <LazyImage
              src={AboutImage}
              alt="aboutus"
              width="22rem"
              padding="3rem"
              maxWidth="100%"
              width0="16rem"
              width2="18rem"
              width3="20rem"
              width5="22rem"
            />
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
      <CoreTeam />
      <Team.containers.TeamContainer />
    </S.AboutSection>
  </Fragment>
));

export { About as default };
