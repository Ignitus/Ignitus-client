/* eslint-disable import/no-unresolved */
import React from 'react';
import {withErrorBoundary} from '../../../ignitus-Shared';
import {Data} from '../constants';
import {Props} from '../types';

import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import * as S from '../styles';

const PureSupportedBy = ({data, type, paragraph}: Props) => (
  <div id="SupportedBy">
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
);

export const SupportedBy: React.FunctionComponent = withErrorBoundary(() => (
  <PureSupportedBy
    data={Data}
    type="Supported By"
    paragraph="by following Organizations, Programs & Companies."
  />
));
