import React from 'react';
import * as S from '../styles';
import * as H from '../../typography';
import { Details } from '../constants';

export const SecondaryDropDown: React.FC = () => {
  const [showOptions, setShowOptions] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([] as any);
  const handleChange = event => {
    setSearchTerm(event.target.value);
    setShowOptions(true);
  };
  React.useEffect(() => {
    const results =
      [] ||
      Details.filter(person =>
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
          {searchResults.map(person => (
            <S.CardWrapper key={`${person.name}`}>
              <S.Avatar src={person.avatarLink} />
              <S.NameWrapper>
                <H.Heading5>{person.name}</H.Heading5>
              </S.NameWrapper>
            </S.CardWrapper>
          ))}
        </S.OptionsContainer>
      )}
    </S.ParentContainer>
  );
};
