import React from 'react';
import * as A from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as Button from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-Buttons/Components/index';
import * as K from './styles';
import UserSettingsSideNavigation from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';
import {Opportunity} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';
import SideNavigation from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-DashboardSideNavigation/Components';
import MessageSideNavigation from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-MessageSideNavigation/Components';
import KitSideNavigation from '../InterfaceSideNavigation/Components/interfaceSideNavigation';

export const UIkit = () => (
  <K.Container>
    <K.SideNavigationContainer>
      <KitSideNavigation />
    </K.SideNavigationContainer>
    <K.UIKitContainer>
      <K.StyledHeading1> Ignitus UIKit </K.StyledHeading1>
      <K.StyledHeading2> Atoms </K.StyledHeading2>
      
      <K.StyledHeading4> Typography </K.StyledHeading4>
      <A.Heading1> Heading1 </A.Heading1>
      <A.Heading2> Heading2 </A.Heading2>
      <A.Heading3> Heading3 </A.Heading3>
      <A.Heading4> Heading4 </A.Heading4>
      <A.Heading5> Heading5 </A.Heading5>
      <A.Heading6> Heading6 </A.Heading6>
      <A.Paragraph> Paragraph </A.Paragraph>
      
      <K.StyledHeading4> Card </K.StyledHeading4>
      <K.Card> Card </K.Card>
      <K.StyledHeading4> Separator </K.StyledHeading4>
      <A.Separator />
     
      
      <K.StyledHeading6> Text link</K.StyledHeading6>
      <Button.TextButtonUnderline> Text Link </Button.TextButtonUnderline>
     

      <K.StyledHeading2> Organisms </K.StyledHeading2>
     
      <K.StyledHeading4> Opportunity list </K.StyledHeading4>
      <Opportunity />
      
    </K.UIKitContainer>
  </K.Container>
);
