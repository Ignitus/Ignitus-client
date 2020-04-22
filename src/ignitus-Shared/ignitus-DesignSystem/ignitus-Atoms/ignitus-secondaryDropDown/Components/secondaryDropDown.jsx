import React, { Component, useState } from 'react';
import * as S from '../styles';
import * as H from '../../typography';
import {Details} from '../constants';


export default function SecondaryDropDown() {
  const [searchTerm, setSearchTerm] = React.useState(" ");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = Details.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <S.ParentContainer className="ParentContainer">
      <S.SearchBar onChange={handleChange} value={searchTerm}/>
      <S.OptionsContainer>
        {searchResults.map((person, index) =>
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
    </S.ParentContainer>
  );
}
