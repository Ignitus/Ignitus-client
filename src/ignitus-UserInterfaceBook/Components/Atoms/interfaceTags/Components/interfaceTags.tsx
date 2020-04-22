import React from 'react';
import {
  DefaultTag1,
  DefaultTag2,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultTag/Components';
import {TagsContainer, DefaultTag3} from '../styles';
import {Heading2} from '../../../../../ignitus-Shared';
import * as C from '../../../../../ignitus-Shared';

const interfaceTags: React.FC = () => (
  <TagsContainer>
    <Heading2>Tags</Heading2>
    <hr />

    <DefaultTag1
      label={'Sophia_resume.pdf'}
      color={C.IgnitusBlue}
      background={C.SecondaryColor}
    />
    <br />
    <DefaultTag2
      label={'publication_report.pdf'}
      color={C.IgnitusBlue}
      background={C.GreyOne}
    />

    <br />
    <DefaultTag3
      label={'Full Time'}
      color={C.White}
      background={C.IgnitusBlue}
    />
    <br />
    <DefaultTag3
      label={'Literature'}
      color={C.IgnitusBlue}
      background={C.White}
    />
  </TagsContainer>
);

export default interfaceTags;
