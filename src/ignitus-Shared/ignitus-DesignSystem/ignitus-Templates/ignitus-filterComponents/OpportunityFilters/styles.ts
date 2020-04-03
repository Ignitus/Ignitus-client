import styled from '@emotion/styled';

import { Paragraph } from '../../../shared';
import { PrimaryButton, Button } from '../../../ignitus-Atoms/buttons';
import { Card } from '../../../ignitus-Atoms/atoms';
import { White, IgnitusBlue, Grey1, Grey2 } from '../../../ignitus-Atoms/colors';
import { MD, Normal } from '../../../ignitus-Atoms/fonts';
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

export const TagBtnContainer = styled(PrimaryButton)`
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

export const ResetBtnContainer = styled(PrimaryButton)`
  background-color: ${White};
  font-size: ${MD};
  padding: 10px 22px;
  margin: 10px;
  margin-left: auto;
  color: ${IgnitusBlue};
  border: 2px solid ${IgnitusBlue};
  border-radius: 2rem;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${IgnitusBlue};
    color: ${White};
    outline: none;
  }
`;

export const DropdownBtnContainer = styled(Button)`
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

export const SelectOptionContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${White};
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
  padding: .5rem;
  outline: none;
  width: 95%;
`

export const ArrowDownIconContainer = styled(Icon)`
  margin-bottom: -.6rem;
  margin-left: .5rem;
  margin-right: -1rem;
  fill: ${props => props.color ? props.color : IgnitusBlue};
`;

export const CrossIconContainer = styled(Icon)`
  margin-bottom: -.5rem;
  margin-left: 1.2rem;
  margin-right: -.7rem;
  cursor: pointer;
  fill: ${props => props.color ? props.color : White};
`;

export const SearchIconContainer = styled(Icon)`
  margin-right: .7rem;
  margin-top: 1rem;
  cursor: pointer;
  fill: ${props => props.color ? props.color : Grey1};
`;

export const LocationIconContainer = styled(Icon)`
  margin-left: -.4rem;
  margin-right: .4rem;
  fill: ${props => props.color ? props.color : IgnitusBlue};
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
  border-top: 2px dashed ${Grey2};
`
