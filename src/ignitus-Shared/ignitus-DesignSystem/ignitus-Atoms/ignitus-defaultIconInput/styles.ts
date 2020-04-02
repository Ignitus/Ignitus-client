import styled from '@emotion/styled';
import {flexibleRowDiv} from '../../shared';
import {Grey1, Grey2, GreyBackground, IgnitusBlue, Red, White} from '../colors';
import {SM} from '../fonts';
import Icon from '../../../ignitus-Utilities/Components/icon';


export const InputContainer = styled(flexibleRowDiv)`
  border: none;
  border-radius: 8px;
  padding: 0.2rem;
  position: absolute;
  width: 436px;
  height: 50px;
  background: ${GreyBackground};
  &:focus {
    color: ${Red};
  }
`;

export const Input = styled.div`
  // position: absolute;
  width: 436px;
  height: 22px;
  left:  22px;
  top: 294px;
  padding-left: 1rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #F9BF64;
`;

export const StyledIcon = styled(Icon)`
  height: 2rem;
  width: 1.5rem;
  fill: ${IgnitusBlue};
  transition: 0.3s;
  flex: 1;
  margin-right:0;
  position: absolute;
  left: 90.33%;
  right: 3.5%;
  // top: 4.17%;
  // bottom: 4.17%;

  // background: #000066;
  // 1x

`;
