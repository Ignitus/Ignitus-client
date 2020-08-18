import styled from '@emotion/styled';
import { StyledTagProps } from './types';
import { Paragraph } from '../../..';
import { Bold } from '../../ignitus-Atoms/fonts';
import * as C from '../../ignitus-Atoms/colors';
import * as F from '../../ignitus-Atoms/fonts';

export const Container = styled.div<StyledTagProps>`
  background: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 0.5rem;
  margin: 0.5rem;
  display: flex;
  padding: 0px !important;
  width: 592px !important;
  height: 659px !important;
  flex-direction: column;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.button`
  background-color: ${C.IgnitusBlue};
  border: none;
  cursor: pointer;
`;

export const Text = styled(Paragraph)`
  font-weight: ${Bold};
  color: ${props => props.color};
`;

export const MessageHeader = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  margin: 10px 0px 10px 0px;
`;
export const HeaderLeft = styled.div`
  flex: 1;
  justify-content: flex-start;
  font-size: 18px;
  padding-left: 12px;
  margin-left: 10px;
  color: #e0e0e0;
  line-height: 21px;
`;

export const Input = styled.input`
  flex: 6;
  height: 75px;
  // justify-item: center !important;
  width: 725px;
  // background-color: ${C.GreyLight};
  background-color: #f7f7f7;
  padding-left: 2rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.XL};
  border: none;
  

   ::placeholder {
     color: ${C.GreySecondaryText};
     font-weight: ${F.SemiBold};
     font-size: ${F.SM};
   opacity: 0.3;
   }
`;

export const BodyOptions = styled.div<StyledTagProps>`
  display: flex;
  background: ${C.IgnitusBlue};
  width: 100%;
  flex-direction: row;
  height: 44px;
  align-items: center;
  // justify-content: space-evenly;
`;
export const BodyTab1 = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const BodyTab2 = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 0.45px solid #e0e0e0;
`;
export const BodyTab3 = styled.div`
  display: flex;
  flex: 3;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const BtnContainer = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 70px;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 29px;
`;

export const BtnIconContainer = styled.div`
  margin-right: 5px;
`;
export const ButtonText = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: ${C.IgnitusBlue};
`;

export const MessageBody = styled.div`
  width: 100%;
  height: 80%;
`;

export const MessageInput = styled.textarea`
  height: 85%;
  width: 85%;
  margin: 20px 20px 0 20px;
  background-color: #f7f7f7;
  padding-left: 20px;
  padding-top: 20px;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.XL};
  border: none;
  resize: none;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.SM};
    opacity: 0.3;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-right: 20px;
  justify-content: flex-end;
`;

export const ActionBtnContainer = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  width: 130px;
  padding-left: 25px;
`;
export const ActionBtnContainer2 = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: ${C.IgnitusBlue};
  border: none;
  padding: 10px;
  padding-left: 25px;
  width: 122px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  margin-left: 18px;
`;
export const ButtonText1 = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${C.IgnitusBlue};
`;

export const ButtonText2 = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
