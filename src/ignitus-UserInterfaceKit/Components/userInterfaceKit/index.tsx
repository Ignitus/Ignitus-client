import React from 'react';
import * as A from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as Button from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-Buttons/Components/index';
import * as K from './styles';
import {Opportunity} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';
import KitSideNavigation from '../InterfaceSideNavigation/Components/interfaceSideNavigation';

export const UIkit = () => (
  <K.Container>
    <K.SideNavigationContainer>
      <KitSideNavigation />
    </K.SideNavigationContainer>
    <K.UIKitContainer>
      <K.StyledHeading1> Ignitus UIKit </K.StyledHeading1>
      <K.StyledHeading2> Atoms </K.StyledHeading2>
      
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
