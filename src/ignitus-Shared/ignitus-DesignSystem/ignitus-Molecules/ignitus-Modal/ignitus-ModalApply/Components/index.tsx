import React from 'react';
import { DefaultInput, White, SecondaryColor } from '../../../../..';
import { DefaultTag1 } from '../../../../ignitus-Atoms/ignitus-defaultTag/Components';

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
        width="300px"
      />
    </O.TopSection>

    <O.MiddleSection>
      <O.LeftSection>
        <O.Paragraph>Resume *</O.Paragraph>
        <DefaultTag1
          label="Sophia_resume.pdf"
          color={White}
          background={SecondaryColor}
        />
      </O.LeftSection>
      <O.RightSection>
        <O.Paragraph>Cover letter</O.Paragraph>
        <DefaultTag1
          label="Upload document"
          color={SecondaryColor}
          background={White}
        />
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
