import React from 'react';
import * as S from '../styles';
import { DefaultCheckbox } from '../../../ignitus-Atoms/ignitus-defaultCheckbox/Components';
import { GreySecondaryText } from '../../../ignitus-Atoms/colors';
import { SM } from '../../../ignitus-Atoms/fonts';
import { CheckBoxProp } from '../types';

export const MessageSettings: React.FC = () => {
  return (
    <S.Container>
      <S.ListContainer>
        <CustomCheckBox
          label="Receive Direct Messages from anyone"
          value="anyone"
        />
        <CustomCheckBox
          label="Receive Direct Messages from connections"
          value="connections"
        />
        <CustomCheckBox
          label="Receive Direct Messages from connections and their direct connections"
          value="directConnections"
        />
      </S.ListContainer>
      <S.CustomButton>Save Changes</S.CustomButton>
    </S.Container>
  );
};

export const CustomCheckBox: React.FC<CheckBoxProp> = ({ label, value }) => {
  return (
    <S.ItemContainer>
      <DefaultCheckbox
        checkBoxProps={{ height: '1.5rem', width: '1.5rem' }}
        label={label}
        value={value}
        textProps={{ color: GreySecondaryText, fontSize: SM, width: '22rem' }}
      />
    </S.ItemContainer>
  );
};
