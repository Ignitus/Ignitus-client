/* eslint-disable import/extensions */
/* eslint-disable no-eval */

import React, { useState } from 'react';
import * as C from '../../../ignitus-Atoms/colors.ts';
import * as S from './styles.ts';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export default function OpportunityFilters() {

  const dummyDates = ['Past 24 hours', 'Past week', 'Past Month'];
  const dummyJobType = ['Part time', 'Full time', 'Contract'];
  const dummyJobLocations = ['Munich, Paris', 'Prague', 'Zurich'];

  const [Tags, setTags] = useState({
    dummyDates: '',
    dummyJobType: '',
    dummyJobLocations: '',
  });
  const [keyWords, setKeyWords] = useState({
    keywords: '',
  });
  const handlechange = (e, type) => setTags({
    ...Tags,
    [type]: e.target.textContent,
  });
  const resetTag = type => setTags({
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
    <S.FiltersContainer>
      <S.UpperContainer>
        <S.SearchIcon name={AppIcon.SearchIcon} />
        <S.FilterItemsContainer>
          <S.TagsBarContainer size="large">
            {
              Object.keys(Tags).map(key => (Tags[key] && (
                <S.TagBtnContainer key={key}>
                  {Tags[key]}
                  <S.CrossIcon name={AppIcon.CrossIcon} onClick={() => resetTag(key)} />
                </S.TagBtnContainer>
              )))
            }
          </S.TagsBarContainer>
          <S.DashedLineContainer />
          <S.SearchBarContainer>
            <S.InputContainer
              type="text"
              name="keyword"
              value={keyWords.keywords}
              onChange={e => setKeyWords({ keywords: e.target.value })}
              placeholder="Search Keyword"
            />
            <S.CrossIcon
              name={AppIcon.CrossIcon}
              color={C.IgnitusBlue}
              onClick={() => setKeyWords({ keywords: '' })}
            />
          </S.SearchBarContainer>
        </S.FilterItemsContainer>
      </S.UpperContainer>
      <S.FilterBtnsContainer>
        {
          Object.keys(Tags).map((key, i) => (
            <S.DropdownContainer key={i}>
              <S.DropdownBtnContainer>
                {
                  key === 'dummyDates' && (
                    <span>
                      Date Posted
                      <S.ArrowDownIcon name={AppIcon.FilledArrowDownIcon} />
                    </span>
                  )
                }
                {
                  key === 'dummyJobType' && (
                    <span>
                      Job Type
                      <S.ArrowDownIcon name={AppIcon.FilledArrowDownIcon} />
                    </span>
                  )
                }

                {
                  key === 'dummyJobLocations' && (
                    <span>
                      <S.LocationIcon name={AppIcon.LocationIcon} />
                      Job Location
                    </span>
                  )
                }
              </S.DropdownBtnContainer>
              <S.SelectOptionContainer>
                {
                  eval(key).map(value => (
                    <S.SelectOptionText key={value} onClick={e => handlechange(e, key)}>
                      {value}
                    </S.SelectOptionText>
                  ))
                }
              </S.SelectOptionContainer>
            </S.DropdownContainer>
          ))
        }
        <S.ResetBtnContainer size="large" onClick={resetFilters}>Reset Filter</S.ResetBtnContainer>
      </S.FilterBtnsContainer>
    </S.FiltersContainer>
  );
}
