import React from 'react';
import * as C from '../styles';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared';
import {
  PrimaryColors,
  GreyShades,
  BasicColors,
  SocialPlatformColors,
} from '../constants';


export const interfaceColors: React.FC = () => (
  <Interface>
    <Heading2>Primary Colors</Heading2>
    <ColorsMapper colors={PrimaryColors} />
    <hr />
    <Heading2>Grey Shades </Heading2>
    <ColorsMapper colors={GreyShades} />
    <hr />
    <Heading2>Basic Colors </Heading2>
    <ColorsMapper colors={BasicColors} />
    <hr />
    <Heading2>Social Platforms Colors </Heading2>
    <ColorsMapper colors={SocialPlatformColors} />
    <hr />
  </Interface>
);

const ColorsMapper: Function = ({colors}: {colors: string[]}): JSX.Element[] =>
  colors.map((color: string) => <C.Color key={color} hex={color}> {color} </C.Color>);
