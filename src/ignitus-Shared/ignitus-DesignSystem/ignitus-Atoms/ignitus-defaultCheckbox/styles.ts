import styled from '@emotion/styled';
import { Paragraph } from '../typography';
import { MD, PrimaryFamily, Normal } from '../fonts';
import { GreyText } from '../colors';
import { TextProps } from './types';

export const CheckBox = styled.input`
  height: ${props => (props.height ? props.height : '1rem')};
  width: ${props => (props.width ? props.width : '1rem')};
`;

export const Label = styled.label`
  margin-left: 0.4rem;
`;

export const StyledParagraph = styled(Paragraph)<TextProps>`
  font-size: ${props => (props.fontSize ? props.fontSize : MD)};
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : PrimaryFamily};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : Normal)};
  color: ${props => (props.color ? props.color : GreyText)};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;
