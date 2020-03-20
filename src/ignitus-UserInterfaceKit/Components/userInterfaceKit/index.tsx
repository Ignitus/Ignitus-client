import React from 'react';
import * as A from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as Button from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-Buttons/Components/index';
import * as K from './styles';
import UserSettingsSideNavigation from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';
import {Opportunity} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';
import SideNavigation from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-DashboardSideNavigation/Components';
import MessageSideNavigation from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-MessageSideNavigation/Components';
import KitSideNavigation from '../sideNavigation/Components/KitSideNavigation';

export const UIkit = () => (
  <K.Container>
    <K.SideNavigationContainer>
      <KitSideNavigation />
    </K.SideNavigationContainer>
    <K.UIKitContainer>
      <K.Heading1> Ignitus UIKit </K.Heading1>
      <K.Heading2> Atoms </K.Heading2>
      <K.Heading4> Colors </K.Heading4>
      <K.Heading4> Icons </K.Heading4>
      <K.Twitter />
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
      {/* https://miro.medium.com/max/2800/1*rPFTtW01pNiPF7nwuJER5Q.png */}
      <K.Heading4> Buttons </K.Heading4>
      <Button.PrimaryButton> Primary Button </Button.PrimaryButton>
      <Button.SecondaryButton> Secondary Button </Button.SecondaryButton>
      <Button.GreyButton> Grey Button </Button.GreyButton>
      <Button.OrangeButton> Orange Button </Button.OrangeButton>
      <Button.WhiteButton> White Button </Button.WhiteButton>
      <K.Heading6> Medium Sized Buttons </K.Heading6>
      <Button.MediumPrimaryButton>
        {' '}
        Medium Primary Button{' '}
      </Button.MediumPrimaryButton>
      <K.Heading6> Small Sized Buttons </K.Heading6>
      <Button.SmallPrimaryButton>
        {' '}
        Small Primary Button{' '}
      </Button.SmallPrimaryButton>
      <K.Heading6> Button States </K.Heading6>
      <Button.DisabledButton> Disabled State </Button.DisabledButton>
      <Button.DangerButton> Danger State </Button.DangerButton>
      <Button.YellowButton> Yellow Button </Button.YellowButton>
      <Button.GreenButton> Green Button </Button.GreenButton>
      <K.Heading6> Text Button </K.Heading6>
      <Button.TextButton> Text Button </Button.TextButton>
      <Button.TextButtonUnderline> Text Button </Button.TextButtonUnderline>
      <K.Heading6> Styled Buttons </K.Heading6>
      <Button.StyledButtonBottomRight>
        {' '}
        Styled Button Bottom Right{' '}
      </Button.StyledButtonBottomRight>
      <Button.StyledButtonTopLeft>
        {' '}
        Styled Button Top Left{' '}
      </Button.StyledButtonTopLeft>
      <K.Heading6> Rounded Button </K.Heading6>
      <Button.RoundedPrimaryButton>
        {' '}
        Rounded Primary Button{' '}
      </Button.RoundedPrimaryButton>
      <K.Heading6> Social Buttons </K.Heading6>
      <K.Heading6> Button with Icons </K.Heading6>
      <K.Heading6> Floating Action Button </K.Heading6>
      <K.Heading6> Icon with text link</K.Heading6>
      <K.Heading6> Icon Button</K.Heading6>
      <K.Heading6> Text link</K.Heading6>
      <Button.TextButtonUnderline> Text Link </Button.TextButtonUnderline>
      <K.Heading2> Molecules </K.Heading2>
      <K.Heading4> Input field with buttons </K.Heading4>
      <K.Heading4> Overlay </K.Heading4>
      <K.Heading4> Card with details </K.Heading4>

      <K.Heading2> Organisms </K.Heading2>
      <K.Heading4> Navigations </K.Heading4>
      <K.Heading4> Footer </K.Heading4>
      <K.Heading4> Sidebars </K.Heading4>
      <K.NavigationWrapper>
        <UserSettingsSideNavigation />
        <SideNavigation />
        <MessageSideNavigation />
      </K.NavigationWrapper>
      <K.Heading4> Opportunity list </K.Heading4>
      <Opportunity />
      <K.Heading4> Forms </K.Heading4>
      <K.Heading4> Filter with tags </K.Heading4>

      <K.Heading2> Templates </K.Heading2>
      <K.Heading4> Profile side section </K.Heading4>
      <K.Heading4> Forms </K.Heading4>
      <K.Heading4> Posts Cards with different formats </K.Heading4>
    </K.UIKitContainer>
  </K.Container>
);
