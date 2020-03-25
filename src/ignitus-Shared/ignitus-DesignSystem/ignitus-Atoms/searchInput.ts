import styled from '@emotion/styled';
import * as C from './colors';
import * as F from './fonts';
import { getPadding, getFontSizes, getRadius, BtnSizeProps } from '../../ignitus-Utilities/HelperFunctions/emotionHelpers';
// import { Component} from 'react';

export const SearchInputContainer = styled.div`
  text-decoration: none;
  border-radius: 10px;
  line-height: 1rem;
  margin: 5px;
  font-size: ${F.MD};
  font-weight: ${F.Normal};
`;

export const SearchNameField = styled(SearchInputContainer)<BtnSizeProps>`
  color: ${C.GreyLight};
  // background-color: #F7F7F7;
  // padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: 15px;
  border: 3px solid #000066;
  // color: #000066;
`;