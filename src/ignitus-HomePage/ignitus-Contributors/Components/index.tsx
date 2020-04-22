import React from 'react';

import * as S from '../styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

import {Data} from '../constants';
import {withErrorBoundary} from '../../../ignitus-Shared';

interface Props {
  data: any;
  type: string;
  paragraph: string;
}

export const PureContributors = ({data, type, paragraph}: Props) => (
  <div id="contributors">
    <div>
      <T.TopSection>
        <T.Title>{type}</T.Title>
        <S.Paragraph>
          Supported with{' '}
          <S.Icon>
            <S.Heart />
          </S.Icon>{' '}
          {paragraph}
        </S.Paragraph>
      </T.TopSection>
      <T.BootStrapSection>
        <S.BottomRow>
          {data.map((logo: string) => (
            <S.Card key={logo}>
              <S.CardPicture src={logo} alt="logo" />
            </S.Card>
          ))}
        </S.BottomRow>
      </T.BootStrapSection>
    </div>
  </div>
);

export const Contributors = withErrorBoundary(() => (
  <PureContributors
    data={Data}
    type="Contributors"
    paragraph="by Students, Researchers and Alumni of ..."
  />
));
