import React from 'react';
import * as C from '../styles';
import {StyledHeading2} from '../../../../styles';
import {
  PrimaryColors,
  GreyShades,
  BasicColors,
  SocialPlatformColors,
} from '../constants';

export const interfaceColors: React.FC = () => (
  <C.ColorsContainer>
    <StyledHeading2>Primary Colors</StyledHeading2>
    <ColorsMapper colors={PrimaryColors} />
    <hr />
    <StyledHeading2>Grey Shades </StyledHeading2>
    <ColorsMapper colors={GreyShades} />
    <hr />
    <StyledHeading2>Basic Colors </StyledHeading2>
    <ColorsMapper colors={BasicColors} />
    <hr />
    <StyledHeading2>Social Platforms Colors </StyledHeading2>
    <ColorsMapper colors={SocialPlatformColors} />
    <hr />
  </C.ColorsContainer>
);

const ColorsMapper: Function = ({colors}: {colors: string[]}): JSX.Element[] =>
  colors.map((color: string) => <C.Color key={color} hex={color}> {color} </C.Color>);
