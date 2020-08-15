import React from 'react';
import * as S from '../styles';
import { CheckIcon } from '../../../ignitus-Assets/ignitus-Icons/checkIcon';
import { Props } from '../types';

export const MessageSettings: React.FC<Props> = P => {
  return (
    <S.Container>
      <S.ItemContainer style={{ top: 41 }}>
        <S.CheckContainer
          selected={P.anyone}
          onClick={() => P.setAnyone(!P.anyone)}
        >
          {P.anyone ? <CheckIcon style={{ fill: 'white', width: 14 }} /> : null}
        </S.CheckContainer>
        <S.ItemText>Receive Direct Messages from anyone</S.ItemText>
      </S.ItemContainer>
      <S.ItemContainer style={{ top: 95 }}>
        <S.CheckContainer
          selected={P.connections}
          onClick={() => P.setConnections(!P.connections)}
        >
          {P.connections ? (
            <CheckIcon style={{ fill: 'white', width: 14 }} />
          ) : null}
        </S.CheckContainer>
        <S.ItemText>Receive Direct Messages from connections</S.ItemText>
      </S.ItemContainer>
      <S.ItemContainer style={{ top: 148 }}>
        <S.CheckContainer
          selected={P.directConnections}
          onClick={() => P.setDirectConnections(!P.directConnections)}
        >
          {P.directConnections ? (
            <CheckIcon style={{ fill: 'white', width: 14 }} />
          ) : null}
        </S.CheckContainer>
        <S.ItemText>
          Receive Direct Messages from connections and their direct connections
        </S.ItemText>
      </S.ItemContainer>
      <S.BtnContainer
        onClick={() => {
          alert('Button Clicked');
        }}
      >
        <S.BtnText>Save Changes</S.BtnText>
      </S.BtnContainer>
    </S.Container>
  );
};
