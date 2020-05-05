/* eslint-disable import/extensions */

import React, { useState } from 'react';
import * as S from './styles.ts';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { RoundedButton } from '../../../ignitus-Atoms/buttons';

export default function OpportunityFilters() {
  const dummyData = {
    dummyDates: ['Past 24 hours', 'Past week', 'Past Month'],
    dummyJobType: ['Part time', 'Full time', 'Contract'],
    dummyJobLocations: ['Munich, Paris', 'Prague', 'Zurich'],
  };

  const [Tags, setTags] = useState({
    dummyDates: '',
    dummyJobType: '',
    dummyJobLocations: '',
  });
  const [keyWords, setKeyWords] = useState({
    keywords: '',
  });
  const handlechange = (e, type) =>
    setTags({
      ...Tags,
      [type]: e.target.textContent,
    });
  const resetTag = type =>
    setTags({
      ...Tags,
      [type]: '',
    });
  const resetFilters = () => {
    setTags({
      ...Tags,
      dummyDates: '',
      dummyJobType: '',
      dummyJobLocations: '',
    });
    setKeyWords({
      keywords: '',
    });
  };

  return (
    <S.Container>
      <S.TopContainer>
        <S.SelectedFiltersContainer>
          <S.SearchIcon name={AppIcon.SearchIcon} />
          <S.SelectedFilters>
            {Object.keys(Tags).map(
              key =>
                Tags[key] && (
                  <S.RoundedDefaultButtonWithIcon
                    size="medium"
                    onClick={() => resetTag(key)}
                    category="primary"
                    key={key}
                    name={AppIcon.CrossIcon}
                    content={Tags[key]}
                  />
                ),
            )}
          </S.SelectedFilters>
        </S.SelectedFiltersContainer>

        <S.SearchContainer>
          <S.SearchInputContainer>
            <S.SearchInput
              type="text"
              name="keyword"
              value={keyWords.keywords}
              onChange={e => setKeyWords({ keywords: e.target.value })}
              placeholder="Search Keyword"
            />
          </S.SearchInputContainer>
          <S.CrossIcon
            name={AppIcon.CrossIcon}
            onClick={() => setKeyWords({ keywords: '' })}
          />
        </S.SearchContainer>
      </S.TopContainer>
      <S.BottomContainer>
        {Object.keys(Tags).map(key => (
          <S.ButtonDropDownContainer key={key}>
            {key === 'dummyDates' && (
              <S.RoundedDefaultButtonWithIcon
                size="medium"
                category="secondary"
                name={AppIcon.FilledArrowDownIcon}
                content="Date Posted"
              />
            )}
            {key === 'dummyJobType' && (
              <S.RoundedDefaultButtonWithIcon
                size="medium"
                category="secondary"
                name={AppIcon.FilledArrowDownIcon}
                content="Job Type"
              />
            )}

            {key === 'dummyJobLocations' && (
              <S.RoundedDefaultButtonWithIcon
                size="medium"
                category="secondary"
                name={AppIcon.LocationIcon}
                content="Job Location"
              />
            )}
            <S.OptionSelector>
              {dummyData[key].map(value => (
                <S.Option key={value}>
                  <S.OptionText key={value} onClick={e => handlechange(e, key)}>
                    {value}
                  </S.OptionText>
                </S.Option>
              ))}
            </S.OptionSelector>
          </S.ButtonDropDownContainer>
        ))}
        <RoundedButton
          size="medium"
          category="secondary"
          onClick={resetFilters}
        >
          {' '}
          Reset Filter
        </RoundedButton>
      </S.BottomContainer>
    </S.Container>
  );
}
