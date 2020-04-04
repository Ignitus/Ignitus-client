import React from 'react';
import * as S from '../style';

export default function dashboardFooter() {
  return (
  <S.Footer>  
    <S.Container>
      <S.Column>
        <S.FooterSections>
          <S.FooterRow>
            <li> <a href="#!">About</a> </li>
            <li> <a href="#!">Privacy</a></li>
            <li> <a href="#!">Careers</a> </li>
          </S.FooterRow>
        </S.FooterSections>
        <S.FooterSections>
          <S.FooterRow>
            <li> <a href="#!">Help Center</a> </li>
            <li> <a href="#!">Terms & Condtions</a></li>
          </S.FooterRow>
        </S.FooterSections>
      </S.Column>
    </S.Container>
    <S.Copyright>&copy; Ignitus 2018</S.Copyright>
  </S.Footer>
  );
}
