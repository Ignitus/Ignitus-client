import React from 'react';
import * as S from '../style';

export default function DashboardFooter() {
  return (
    <S.Footer>
      <S.Column>
        <S.FooterSections>
          <S.FooterRow>
            <li>
              {' '}
              <a href="#!">About</a>{' '}
            </li>
            <li>
              {' '}
              <a href="#!">Privacy</a>
            </li>
            <li>
              {' '}
              <a href="#!">Careers</a>{' '}
            </li>
          </S.FooterRow>
        </S.FooterSections>
        <S.FooterSections>
          <S.FooterRow>
            <li>
              {' '}
              <a href="#!">Help Center</a>{' '}
            </li>
            <li>
              {' '}
              <a href="#!">Terms & Condtions</a>
            </li>
          </S.FooterRow>
        </S.FooterSections>
        <S.Copyright>&copy; Ignitus 2018</S.Copyright>
      </S.Column>
    </S.Footer>
  );
}
