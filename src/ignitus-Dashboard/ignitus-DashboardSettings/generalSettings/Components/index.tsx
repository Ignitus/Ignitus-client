import React from 'react';
import * as P from '../styles';
import { Paragraph, Heading3 } from '../../../../ignitus-Shared';
import { White } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { UserSettingsSideNavigation } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideNavigation/ignitus-UserSettingsSideNavigation/Components';

const GeneralSettings = () => (
  <P.ParentContainer>
    <P.LeftContainer>
      <UserSettingsSideNavigation />
    </P.LeftContainer>
    <P.RightContainer>
      <P.TopSection>
        <P.InputSection>
          <P.Text>Username</P.Text>
          <P.Input placeholder="Username" type="text" name="username" />
        </P.InputSection>
        <P.InputSection>
          <P.Text>Name</P.Text>
          <P.Input placeholder="Name" type="text" name="name" />
        </P.InputSection>
        <P.InputSection>
          <P.Text>Email</P.Text>
          <P.Input placeholder="Email" type="text" name="email" />
        </P.InputSection>
        <P.ImageSection>
          <P.Text>Photo</P.Text>
          <P.ImageContainer>
            <P.Image
              alt="Student"
              src="https://storage.googleapis.com/ignitus_assets/ig-avatars/grant.png"
            />
            <P.StyledRoundedButton size="large" category="grey">
              Change
            </P.StyledRoundedButton>
          </P.ImageContainer>
        </P.ImageSection>
      </P.TopSection>
      <P.MiddleSection>
        <P.ElementContainer>
          <P.StyledParagraph>
            To save your changes, please enter your password.
          </P.StyledParagraph>
          <P.InputSection>
            <P.Text>Current Password</P.Text>
            <P.Input
              placeholder="Current password"
              type="password"
              name="password"
            />
          </P.InputSection>
          <P.ParagraphLink to="#!">Forgot your password?</P.ParagraphLink>
          <P.RightSection>
            <P.StyledRoundedButton
              size="medium"
              category="orange"
              color={White}
            >
              Save Changes
            </P.StyledRoundedButton>
          </P.RightSection>
        </P.ElementContainer>
      </P.MiddleSection>
      <P.BottomSection>
        <Heading3>Delete my account</Heading3>
        <br />
        <Paragraph>
          Permanently delete your Ignitus account and all data associated with
          it. If you experienced an issue with your account and need help,
          please contact us so we can assist you.
        </Paragraph>
        <br />
        <P.StyledRoundedButton size="medium" category="primary">
          Delete Account
        </P.StyledRoundedButton>
      </P.BottomSection>
    </P.RightContainer>
  </P.ParentContainer>
);

export default GeneralSettings;
