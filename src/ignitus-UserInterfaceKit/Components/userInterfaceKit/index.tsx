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
      <K.Heading1> Ignitus UIKit </K.Heading1>
      <K.Heading2> Atoms </K.Heading2>
      
      <K.Heading4> Typography </K.Heading4>
      <A.Heading1> Heading1 </A.Heading1>
      <A.Heading2> Heading2 </A.Heading2>
      <A.Heading3> Heading3 </A.Heading3>
      <A.Heading4> Heading4 </A.Heading4>
      <A.Heading5> Heading5 </A.Heading5>
      <A.Heading6> Heading6 </A.Heading6>
      <A.Paragraph> Paragraph </A.Paragraph>
      
      <K.Heading4> Card </K.Heading4>
      <K.Card> Card </K.Card>
      <K.Heading4> Separator </K.Heading4>
      <A.Separator />
     
      
      <K.Heading6> Text link</K.Heading6>
      <Button.TextButtonUnderline> Text Link </Button.TextButtonUnderline>
     

      <K.Heading2> Organisms </K.Heading2>
     
      <K.Heading4> Opportunity list </K.Heading4>
      <Opportunity />
      
    </K.UIKitContainer>
  </K.Container>
);
