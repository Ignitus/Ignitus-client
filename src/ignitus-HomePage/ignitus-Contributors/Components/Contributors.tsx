import React from 'react';

import * as S from '../Styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

import { Data } from '../constants';
import { Paragraph } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

interface Props {
  data: any;
  type: string,
  paragraph: string,
}

export const PureContributors = ({ data, type, paragraph }: Props) => (
  <section id="contributors">
    <T.Wrapper>
      <T.TopSection>
        <T.Title>{ type }</T.Title>
        <Paragraph>
          Supported with
          {' '}
          <S.Icon><S.Heart/></S.Icon>
          {' '}
          {paragraph}
        </Paragraph>
      </T.TopSection>
      <T.BottomSection>
        <S.BottomRow>
          {data.map((logo:string) => (
            <S.Card key={logo}>
              <S.CardPicture src={logo} alt="logo" />
            </S.Card>
          ))}
        </S.BottomRow>
      </T.BottomSection>
    </T.Wrapper>
  </section>
);

const Contributors = () => (
  <PureContributors data={Data} type="Contributors" paragraph="by Students, Researchers and Alumni of ..." />
);

export default withErrorBoundary(Contributors);
