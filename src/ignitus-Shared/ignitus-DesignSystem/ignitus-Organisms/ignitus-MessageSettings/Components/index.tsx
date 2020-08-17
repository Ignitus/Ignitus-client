import React from 'react';
import * as S from '../styles';
import { GreySecondaryText } from '../../../ignitus-Atoms/colors';
import { DefaultCheckbox } from '../../../ignitus-Atoms/ignitus-defaultCheckbox/Components';

export const MessageSettings: React.FC = () => {
  return (
    <S.Container>
      <S.StyledCheckboxContainer>
        <DefaultCheckbox
          label="Receive Direct Messages from anyone"
          value="anyone"
          color={GreySecondaryText}
        />
      </S.StyledCheckboxContainer>
      <S.StyledCheckboxContainer>
        <DefaultCheckbox
          label="Receive Direct Messages from connections"
          value="connections"
          color={GreySecondaryText}
        />
      </S.StyledCheckboxContainer>
      <S.StyledCheckboxContainer>
        <DefaultCheckbox
          label="Receive Direct Messages from connections and their direct connections"
          value="directConnections"
          color={GreySecondaryText}
        />
      </S.StyledCheckboxContainer>
      <S.StyledButtonContainer>
        <S.StyledButton>Save Changes</S.StyledButton>
      </S.StyledButtonContainer>
    </S.Container>
  );
};
