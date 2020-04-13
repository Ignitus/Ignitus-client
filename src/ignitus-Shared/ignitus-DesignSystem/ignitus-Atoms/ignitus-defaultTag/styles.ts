import styled from '@emotion/styled';
import { flexibleRowDiv } from '../../shared';
import {IgnitusBlue, White, Red, GreyOne} from '../colors';
import Icon from '../../../ignitus-Utilities/Components/icon';

export const InputContainer = styled(flexibleRowDiv)`
  border: 1px solid ${IgnitusBlue};
  border-radius: 0.5rem;
  padding: 0.2rem;
  width: 14rem;
  background: ${White};
  &:focus {
    color: ${Red};
  }
`;

export const StyledIcon = styled(Icon)`
  height: 1.2rem;
  width: 1.2rem;
  fill: black;
  transition: 0.3s;
  flex: 1;
`;

export const StyledTag1 = {
  backgroundColor: "#FFA500",
  color: "white",
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "45px",
  margin: "0.5rem",
  lineHeight: "1rem",
  fontSize: "18px",
  padding: "16px 32px",
  display: "-webkit-inline-box"
} as React.CSSProperties;

export const StyledTag2 = {
  backgroundColor: "#A9A9A9",
  color: "#000066",
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "45px",
  margin: "0.5rem",
  lineHeight: "1rem",
  fontSize: "18px",
  padding: "16px 32px",
  display: "-webkit-inline-box"
} as React.CSSProperties;

export const StyledTag3 = {
  backgroundColor: "#000066",
  color: "#ffffff",
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "45px",
  margin: "0.5rem",
  lineHeight: "1rem",
  fontSize: "18px",
  padding: "16px 32px",
  display: "-webkit-inline-box"
} as React.CSSProperties;

export const StyledTag4 = {
  backgroundColor: "#ffffff",
  color: "#000066",
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "45px",
  margin: "0.5rem",
  lineHeight: "1rem",
  fontSize: "18px",
  padding: "16px 32px",
  display: "-webkit-inline-box"
} as React.CSSProperties;
