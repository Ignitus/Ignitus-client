/* eslint-disable react/prop-types */
import React from 'react';
import { Data } from '../constants';
import { withErrorBoundary } from '../../ignitus-Shared/Components/ErrorBoundary';
import * as S from '../Styles';
import * as T from '../../ignitus-Shared/Components/emotion-Styles/shared';

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
        <T.Paragraph>
          Supported with
          &nbsp;
          {' '}
          <S.Icon><i className="fa fa-heart heart" /></S.Icon>
          {' '}
          &nbsp;
          { paragraph }
        </T.Paragraph>
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
