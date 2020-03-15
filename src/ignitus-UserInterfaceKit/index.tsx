import React from 'react';
import * as A from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as K from './styles';


export const UIkit = () => (
  <React.Fragment>
    <K.UIKitContainer>
    <K.Heading1> Ignitus UIKit </K.Heading1>

      <K.Heading2> Atoms </K.Heading2>
        <K.Heading4> Colors </K.Heading4>
        <K.Heading4> Typography </K.Heading4>
          <A.Heading1> Heading1 </A.Heading1>
          <A.Heading2> Heading2 </A.Heading2>
          <A.Heading3> Heading3 </A.Heading3>
          <A.Heading4> Heading4 </A.Heading4>
          <A.Heading5> Heading5 </A.Heading5>
          <A.Heading6> Heading6 </A.Heading6>
          <A.Paragraph> Paragraph </A.Paragraph>
        <K.Heading4> Checkboxes </K.Heading4>
        <K.Heading4> Radio buttons </K.Heading4>
        <K.Heading4> Input Fields </K.Heading4>
        <K.Heading4> Dropdowns </K.Heading4>
        <K.Heading4> Tags </K.Heading4>
        <K.Heading4> Card </K.Heading4>
          <K.Card> Card </K.Card>
        <K.Heading4> Separator </K.Heading4>
          <A.Separator /> 
        <K.Heading4> Progress bar </K.Heading4>
        <K.Heading4> Buttons </K.Heading4>
          <A.PrimaryButton primary> Primary Button </A.PrimaryButton>
          <A.SecondaryButton> Secondary Button </A.SecondaryButton>
          <A.GreyButton> Grey Button </A.GreyButton>

      <K.Heading2> Molecules </K.Heading2>
        <K.Heading4> Input field with buttons </K.Heading4>
        <K.Heading4> Overlay </K.Heading4>
        <K.Heading4> Card with details </K.Heading4>

      <K.Heading2> Organisms </K.Heading2>
        <K.Heading4> Navigations </K.Heading4>
        <K.Heading4> Footer </K.Heading4>
        <K.Heading4> Sidebars </K.Heading4>
        <K.Heading4> Forms </K.Heading4>
        <K.Heading4> Filter with tags </K.Heading4>

      <K.Heading2> Templates </K.Heading2>
        <K.Heading4> Profile side section </K.Heading4>
        <K.Heading4> Forms </K.Heading4>
        <K.Heading4> Filter with tags </K.Heading4>
        <K.Heading4> Posts Cards with different formats </K.Heading4>

    </K.UIKitContainer>
  </React.Fragment>
);
