import styled from '@emotion/styled';

import { flexibleRowDiv, flexibleColDiv } from '../../../shared';
import { Card } from '../../../ignitus-Atoms/atoms';
import {
  White,
  IgnitusBlue,
  GreyOne,
  GreyTwo,
  boxShadowColor,
} from '../../../ignitus-Atoms/colors';
import { MD, Normal } from '../../../ignitus-Atoms/fonts';

import { Icon } from '../../../../ignitus-Utilities/Components/icon';
import { DefaultButtonWithIcon } from '../../../ignitus-Atoms/ignitus-defaultButtonWithIcon/Components';

export const Container = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  padding: 1rem;
`;

export const TopContainer = styled(flexibleColDiv)`
  align-items: flex-start;
`;

export const SelectedFiltersContainer = styled(flexibleRowDiv)``;
export const SelectedFilters = styled.div``;

export const SearchContainer = styled(flexibleRowDiv)`
  align-items: flex-start;
  padding: 0.5rem;
  flex: 1;
  border-top: 0.1rem dashed grey;
  margin-top: 1rem;
  width: 100%;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${IgnitusBlue};
  outline: none;
`;

export const CrossIcon = styled(Icon)`
  fill: ${IgnitusBlue};
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;

export const SearchIcon = styled(Icon)`
  fill: ${GreyOne};
  height: 1.5rem;
  width: 1.5rem;
`;

export const RoundedDefaultButtonWithIcon = styled(DefaultButtonWithIcon)`
  border-radius: 2rem;
`;

export const OptionSelector = styled.div`
  display: none;
  background-color: ${White};
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
`;

export const Option = styled.div`
  &:hover {
    cursor: pointer;
    background-color: ${IgnitusBlue};
    p {
      color: ${White};
    }
  }
`;

export const OptionText = styled.p`
  padding: 1rem;
  font-size: ${MD};
  margin: 0;
  font-weight: ${Normal};
  color: ${IgnitusBlue};
`;

export const ButtonDropDownContainer = styled(flexibleColDiv)`
  &:hover {
    div {
      display: block;
    }
  }
`;

export const BottomContainer = styled(flexibleRowDiv)`
  align-items: flex-start;
`;

export const DashedLineContainer = styled.hr`
  border-top: 2px dashed ${GreyTwo};
`;
