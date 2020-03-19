import styled from '@emotion/styled';
import * as C from '../../colors';
import * as F from '../../fonts';

export const Button = styled.button`
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  line-height: 1rem;
  margin: 5px;
  border: none;
  font-size: ${F.MD};
  font-weight: ${F.Normal};
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.24);
  }
`;

export const PrimaryButton = styled(Button)`
  color: ${C.White};
  background-color: ${C.IgnitusBlue};
  &:hover,
  &:focus {
  background-color: ${C.SecondaryColor};
  color: ${C.IgnitusBlue};
}
`;

export const SecondaryButton = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: ${C.White};
  border: 2px solid ${C.IgnitusBlue};
`;

export const WhiteButton = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: ${C.White};
  &:hover,
`;

export const GreyButton = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: ${C.GreyLight};
  border: none;
  &:hover,
  &:focus {
    background-color: ${C.Grey2};
    color: ${C.IgnitusBlue};
  }
`;

export const OrangeButton = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: ${C.SecondaryColor};
  border: none;
`;

export const DisabledButton = styled(Button)`
  color: ${C.GreySecondaryText};
  background-color: ${C.GreyLight};
  border: none;
  cursor: default;
`;

export const DangerButton = styled(Button)`
  color: ${C.White};
  background-color: ${C.Red};
  border: none;
`;

export const GreenButton = styled(Button)`
  color: ${C.White};
  background-color: ${C.Green};
  border: none;
`;

export const YellowButton = styled(Button)`
  color: ${C.GreySecondaryText};
  background-color: ${C.Yellow};
  border: none;
`;


export const TextButton = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: inherit;
  border: none;
  &:hover,
  &:focus {
    background-color: ${C.GreyLight};
    color: ${C.IgnitusBlue};
  }
`;


export const TextButtonUnderline = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: inherit;
  border: none;
  text-decoration: underline;
  &:hover,
  &:focus {
    background-color: ${C.GreyLight};
    color: ${C.IgnitusBlue};
  }
`;


export const StyledButtonBottomRight = styled(Button)`
color: ${C.White};
background-color: ${C.IgnitusBlue};
border-radius: 0px 30px;
&:hover,
&:focus {
  background-color: ${C.SecondaryColor};
  color: ${C.IgnitusBlue};
}
`;

export const StyledButtonTopLeft = styled(Button)`
color: ${C.White};
background-color: ${C.IgnitusBlue};
border-radius: 30px 0px;
&:hover,
&:focus {
  background-color: ${C.SecondaryColor};
  color: ${C.IgnitusBlue};
}
`;

export const RoundedPrimaryButton = styled(PrimaryButton)`
  border-radius: 30px;
`;

export const MediumPrimaryButton = styled(PrimaryButton)`
  padding: 8px 20px;
  font-size: ${F.SM};
  border-radius: 3px;
}
`;

export const SmallPrimaryButton = styled(PrimaryButton)`
  padding: 4px 15px;
  font-size: ${F.XS};
  border-radius: 3px;
}
`;