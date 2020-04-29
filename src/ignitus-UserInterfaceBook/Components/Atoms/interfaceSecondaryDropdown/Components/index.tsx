import React from 'react';
import * as T from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { SecondaryDropDown } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-secondaryDropDown/Components/secondaryDropDown';
import * as S from '../styles';

export const interfaceSecondaryDropDown: React.FC = () => (
  <React.Fragment>
    <S.TitleWrapper>
      <T.Heading3>Secondary DropDown</T.Heading3>
    </S.TitleWrapper>
    <br />
    <SecondaryDropDown />
  </React.Fragment>
);
