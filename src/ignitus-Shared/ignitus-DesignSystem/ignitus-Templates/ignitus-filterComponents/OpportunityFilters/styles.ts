import styled from '@emotion/styled';

import { Paragraph } from '../../../shared';
import {Button, ParentButton} from '../../../ignitus-Atoms/buttons';
import { Card, flexibleColDiv } from '../../../ignitus-Atoms/atoms';
import {White, IgnitusBlue, Grey1, Grey2} from '../../../ignitus-Atoms/colors';
import {MD, Normal} from '../../../ignitus-Atoms/fonts';
import Icon from '../../../../ignitus-Utilities/Components/icon';

export const FiltersContainer = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  padding: 1rem;
`;

export const FilterItemsContainer = styled.div`
  padding-right: 1.5rem;
  display: block;
  width: 100%;
`;

export const UpperContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const TagButton = styled(Button)`
  border-radius: 2rem;
  text-decoration: none;
  background-color: ${IgnitusBlue};
  padding: 10px 22px;
  color: ${White};
  font-size: ${MD};
  &:hover,
  &:focus {
    background-color: ${IgnitusBlue};
    color: ${White};
    outline: none;
  }
`;

export const DropdownBtnContainer = styled(ParentButton)`
  background-color: ${White};
  padding: 10px 25px;
  margin: 10px;
  margin-left: 0;
  font-size: ${MD};
  color: ${IgnitusBlue};
  border: 2px solid ${IgnitusBlue};
  border-radius: 2rem;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const SelectOptionContainer = styled(flexibleColDiv)`
  background-color: ${White};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;


export const SelectOptionText = styled(Paragraph)`
  font-size: ${MD};
  font-weight: ${Normal};
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: ${IgnitusBlue};
  &:hover {
    cursor: pointer;
    background-color: ${IgnitusBlue};
    color: ${White};
  }
`;

export const InputContainer = styled.input`
  background: transparent;
  border: none;
  color: ${IgnitusBlue};
  padding: 0.5rem;
  outline: none;
  width: 95%;
`;

export const ArrowDownIcon = styled(Icon)`
  cursor: pointer;
  fill: ${props => (props.color ? props.color : IgnitusBlue)};
`;

export const CrossIcon = styled(Icon)`
  cursor: pointer;
  fill: ${props => (props.color ? props.color : White)};
`;

export const SearchIcon = styled(Icon)`
  cursor: pointer;
  fill: ${props => (props.color ? props.color : Grey1)};
`;

export const LocationIcon = styled(Icon)`
  fill: ${props => (props.color ? props.color : IgnitusBlue)};
`;

export const TagsBarContainer = styled.div`
  display: flex;
  min-height: 50px;
`;

export const SearchBarContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  & > svg {
    float: right;
    margin-top: 0.5rem;
  }
`;

export const FilterBtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DashedLineContainer = styled.hr`

  border-top: 2px dashed ${Grey2};
`;
