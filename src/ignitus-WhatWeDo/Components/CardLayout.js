import React from 'react';
import Card from './Card';
import { data } from './Data';
import '../Styles/style.scss';
import * as S from '../Styles';
import { withErrorBoundary } from '../../ignitus-Internals';

const CardLayout = () => (
  <S.Wrapper id="what-we-do">
    <S.TopSection>
      <S.Title>What we provide?</S.Title>
      <S.Paragraph>
        Guidance &nbsp;
        {' '}
        <S.Icon>
          <i className="fa fa-graduation-cap" />
        </S.Icon>
        {' '}
        &nbsp; in well researched and goal-oriented courses, getting Internships
        etc
      </S.Paragraph>
    </S.TopSection>
    <S.CardWrapper>
      {[...data].map(x => (
        <Card
          key={x.title}
          image={x.picture}
          title={x.title}
          description={x.description}
        />
      ))}
    </S.CardWrapper>
  </S.Wrapper>
);

export default withErrorBoundary(CardLayout);
