import styled from '@emotion/styled';
import {flexibleRowDiv} from '../../shared';
import * as C from '../colors';
import {SM} from '../fonts';
import Icon from '../../../ignitus-Utilities/Components/icon';


export const InputContainer = styled.div`
  width: 528px;
  height: 138px;
  left: 456px;
  top: 116px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
  border-radius: 16px;
`;

export const container1 = styled.div`
  flex: 2;
`;

export const container2 = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Input = styled.textarea`
  border: none;
  font-size: ${SM};
  outline: none;
  width: 90%;
  margin: 20px;
  overflow:hidden;
  resize:none;
  &::placeholder {
    color: ${C.Grey1};
    resize:none;
  }
`;

export const IconsContainer = styled(flexibleRowDiv)`
  width: 219px;
  height: 26px;
  margin-left: 21px;
  top: 215px;
  background: ${C.GreyBackground};
  border-radius: 16px;
  display: flex;

`;

export const IconCon = styled.button`
   background-color: Transparent;
   background-repeat:no-repeat;
   border: none;
   cursor:pointer;
   overflow: hidden;
   flex: 1;
`;

export const Button = styled.button`
  width: 70px;
  height: 35px;
  color: ${C.White};
  margin-right: 19px;
  background: ${C.IgnitusBlue};
  border-radius: 9px;
`;

export const StyledIcon = styled(Icon)`
  height: 1.2rem;
  width: 1.2rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;

export const StyledIcon2 = styled(Icon)`
  height: 1.8rem;
  width: 1.8rem;
  margin: -0.6rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;




