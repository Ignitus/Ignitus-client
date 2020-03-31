import styled from '@emotion/styled';
import * as C from '../../../ignitus-Atoms/colors';
import * as A from '../../../ignitus-Atoms/atoms';
import * as F from '../../../ignitus-Atoms/fonts';

import {Paragraph} from '../../../shared';
import FilledArrowDownIcon from '../../../ignitus-Assets/ignitus-Icons/filledArrowDownIcon';
import CrossIcon from '../../../ignitus-Assets/ignitus-Icons/crossIcon';
import LocationIcon from '../../../ignitus-Assets/ignitus-Icons/locationIcon';
import SearchIcon from '../../../ignitus-Assets/ignitus-Icons/searchIcon';

export const FiltersContainer = styled(A.Card)`
  position: absolute;
  top: 145px;
  right: 160px;
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  margin: 0.5rem;
  padding: .2rem 3rem .2rem 3rem;
  min-width: 60vw;
`;

export const FilterItemsContainer = styled.div`
  margin: 0;
  padding: 0;
  padding-right: 1.5rem;
  display: block;
  width: 95%;
`;

export const UpperContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const TagBtnContainer = styled(A.PrimaryButton)`
  border-radius: 2rem;
  text-decoration: none;
  background-color: ${C.IgnitusBlue};
  padding: 10px 22px;
  color: ${C.White};
  font-size: ${F.MD};
  &:hover,
  &:focus {
    background-color: ${C.IgnitusBlue};
    color: ${C.White};
    outline: none;
  }
`;

export const ResetBtnContainer = styled(A.PrimaryButton)`
  background-color: ${C.White};
  font-size: ${F.MD};
  padding: 10px 22px;
  margin: 10px;
  margin-left: auto;
  color: ${C.IgnitusBlue};
  border: 2px solid ${C.IgnitusBlue};
  border-radius: 2rem;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${C.IgnitusBlue};
    color: ${C.White};
    outline: none;
  }
`;

export const DropdownBtnContainer = styled(A.Button)`
  background-color: ${C.White};
  padding: 10px 25px;
  margin: 10px;
  margin-left: 0;
  font-size: ${F.MD};
  color: ${C.IgnitusBlue};
  border: 2px solid ${C.IgnitusBlue};
  border-radius: 2rem;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const SelectOptionContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${C.White};
  top: 55px;
  width: 100%;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 16px 0px 16px 16px;
  z-index: 1;
  p:first-of-type {
    border-top-left-radius: 16px;
  }
  p:last-of-type {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover > div {
    display: block;
  }
`;

export const SelectOptionText = styled(Paragraph)`
  font-size: ${F.MD};
  font-weight: ${F.Normal};
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: ${C.IgnitusBlue};
  &:hover {
    cursor: pointer;
    background-color: ${C.IgnitusBlue};
    color: ${C.White};
  }
`;

export const InputContainer = styled.input`
  background: transparent;
  border: none;
  color: ${C.IgnitusBlue};
  padding: .5rem;
  outline: none;
  width: 95%;
`

export const ArrowDownIconContainer = styled(FilledArrowDownIcon)`
  margin-bottom: -.6rem;
  margin-left: .5rem;
  margin-right: -1rem;
  fill: ${props => props.color ? props.color : C.IgnitusBlue};
`;

export const CrossIconContainer = styled(CrossIcon)`
  margin-bottom: -.5rem;
  margin-left: 1.2rem;
  margin-right: -.7rem;
  cursor: pointer;
  fill: ${props => props.color ? props.color : C.White};
`;

export const SearchIconContainer = styled(SearchIcon)`
  margin-right: .7rem;
  margin-top: 1rem;
  cursor: pointer;
  fill: ${props => props.color ? props.color : C.Grey1};
`;

export const LocationIconContainer = styled(LocationIcon)`
  margin-left: -.4rem;
  margin-right: .4rem;
  fill: ${props => props.color ? props.color : C.IgnitusBlue};
`;

export const TagsBarContainer = styled.div`
  display: flex;
  min-height: 50px;
`

export const SearchBarContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  & > svg {
    float: right;
    margin-top: .5rem;
  }
`

export const FilterBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`

export const DashedLineContainer = styled.hr`
  margin: 0;
  padding: 0;
  border-top: 2px dashed ${C.Grey2};
`
