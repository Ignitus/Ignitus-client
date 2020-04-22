import React, { Component, useState } from 'react';
import * as S from '../styles';
import * as H from '../../typography';
import {Details} from '../constants';


export default function SecondaryDropDown() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <S.ParentContainer className="ParentContainer">
      <S.SearchBar onChange={() => setShowOptions(1)} />
      {showOptions && (
        <Cards />
      )}
    </S.ParentContainer>
  );
}


const Cards = () => {
  return (
    <S.OptionsContainer>
      {Details.map((person, index) =>
        <S.CardWrapper key={person.name + "_" + index}>
          <S.Avatar
            src={person.avatarLink}
          />
          <S.NameWrapper>
            <H.Heading5>
              {person.name}
            </H.Heading5>
          </S.NameWrapper>
        </S.CardWrapper>
      )}
    </S.OptionsContainer>
  )
}
