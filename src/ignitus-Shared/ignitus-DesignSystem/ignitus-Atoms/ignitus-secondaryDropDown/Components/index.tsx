import React from 'react';
import * as S from '../styles';
import * as H from '../../typography';
import { DataType } from '../types';

export const SecondaryDropDown = ({ data }) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([] as any);
  const handleChange = event => {
    setSearchTerm(event.target.value);
    setShowOptions(true);
  };
  React.useEffect(() => {
    const results: [] | DataType = data.filter(person =>
      person.name
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(searchTerm.replace(/\s+/g, '').toLowerCase()),
    );
    setSearchResults(results);
    if (searchTerm) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  }, [searchTerm]);

  return (
    <S.ParentContainer className="ParentContainer">
      <S.SearchBarWrapper>
        <S.SearchBar
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
      </S.SearchBarWrapper>
      {showOptions && (
        <S.OptionsContainer>
          {searchResults.map(({ name, avatar }) => (
            <S.CardWrapper key={`${name}`}>
              <S.Avatar src={avatar} />
              <S.NameWrapper>
                <H.Heading5>{name}</H.Heading5>
              </S.NameWrapper>
            </S.CardWrapper>
          ))}
        </S.OptionsContainer>
      )}
    </S.ParentContainer>
  );
};
