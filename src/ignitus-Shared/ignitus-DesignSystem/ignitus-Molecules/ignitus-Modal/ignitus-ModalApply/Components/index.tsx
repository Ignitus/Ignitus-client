import React from 'react';
import { DefaultInput, White, SecondaryColor } from '../../../../..';

import * as O from '../styles';
import { RoundedButton } from '../../../../ignitus-Atoms/buttons';

export const ModalApply = () => (
  <O.ModalApply>
    <O.TopSection>
      <O.Paragraph>Email *</O.Paragraph>
      <DefaultInput
        placeholder="Email"
        type="text"
        name="name"
        height="3rem"
        width="450px"
      />
    </O.TopSection>

    <O.MiddleSection>
      <O.LeftSection>
        <O.Paragraph>Resume *</O.Paragraph>
        <O.StyledDefaultTag1
          label="Sophia_resume.pdf"
          color={White}
          background={SecondaryColor}
        />
      </O.LeftSection>
      <O.RightSection>
        <O.Paragraph>Cover letter</O.Paragraph>
        <O.StyledRoundedButton size="medium" category="orange">
          Upload Document
        </O.StyledRoundedButton>
      </O.RightSection>
    </O.MiddleSection>

    <O.BottomSection>
      <RoundedButton size="medium" category="primary">
        Apply
      </RoundedButton>
      <RoundedButton size="medium" category="white">
        Cancel
      </RoundedButton>
    </O.BottomSection>
  </O.ModalApply>
);
