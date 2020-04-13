import React from 'react';
import { StyledHeading2 } from '../../../../styles';
import { DefaultTag1, DefaultTag2, DefaultTag3, DefaultTag4 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultTag/Components'
import { TagsContainer } from '../styles';

const interfaceTags: React.FC = () => (
  <TagsContainer>
    <StyledHeading2>Tags</StyledHeading2>
    <hr />

    <DefaultTag1 label={'Sophia_resume.pdf'} />
    <DefaultTag2 label={'publication_report.pdf'} />
    <DefaultTag3 label={'Full Time'} />
    <DefaultTag4 label={'Literature'} />
  </TagsContainer>
);

export default interfaceTags;
