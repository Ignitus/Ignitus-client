/* eslint-disable react/prop-types */
import React from 'react';
import { Data } from './Constants';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as S from '../Styles';

export const PureContributors = ({ data, type, paragraph }) => (
  <section id="contributors">
    <S.Wrapper>
      <S.TopSection>
        <S.Title>{ type }</S.Title>
        <S.Paragraph>
          Supported with
          &nbsp;
          {' '}
          <S.Icon><i className="fa fa-heart heart" /></S.Icon>
          {' '}
          &nbsp;
          { paragraph }
        </S.Paragraph>
      </S.TopSection>
      <S.BottomSection>
        <S.BottomRow>
          {data.map(logo => (
            <S.Card key={logo}>
              <img src={logo} alt="logo" />
            </S.Card>
          ))}
        </S.BottomRow>
      </S.BottomSection>
    </S.Wrapper>
  </section>
);

const Contributors = () => (
  <PureContributors data={Data} type="Contributors" paragraph="by Students, Researchers and Alumni of ..." />
);

export default withErrorBoundary(Contributors);
