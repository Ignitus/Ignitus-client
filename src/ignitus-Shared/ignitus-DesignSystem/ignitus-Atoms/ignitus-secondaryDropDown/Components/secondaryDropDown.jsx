import React, { useState } from 'react';
import * as S from '../styles';
import * as H from '../../typography';
import {Details} from '../constants';


export default function SecondaryDropDown() {
  const [showOptions, setShowOptions] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
      setSearchTerm(event.target.value);
      setShowOptions(1);
  };
  React.useEffect(() => {
    if(searchTerm)
      setShowOptions(1);
    else
      setShowOptions(null);
    const results = Details.filter(person =>
      person.name.replace(/\s+/g,'').toLowerCase().includes(searchTerm.replace(/\s+/g,'').toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <S.ParentContainer className="ParentContainer">
      <S.SearchBarWrapper>
        <S.SearchBar
          type={'text'}
          placeholder={'Search...'}
          onChange={handleChange}
          value={searchTerm}
        />
      </S.SearchBarWrapper>
        {showOptions &&
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
      }
    </S.ParentContainer>
  );
}
