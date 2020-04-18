import React from 'react';
import { StyledHeading2 } from '../../../../styles';
import { DefaultTag1, DefaultTag2, DefaultTag3, DefaultTag4 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultTag/Components'
import { TagsContainer } from '../styles';
import * as C from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

const interfaceTags: React.FC = () => (
  <TagsContainer>
    <StyledHeading2>Tags</StyledHeading2>
    <hr />

    <DefaultTag1 label={'Sophia_resume.pdf'} color={C.IgnitusBlue} background={C.Orange} />
    <DefaultTag2 label={'publication_report.pdf'} color={C.White} background={C.GreyOne} />
    <DefaultTag3 label={'Full Time'} color={C.White} background={C.IgnitusBlue} />
    <DefaultTag4 label={'Literature'} color={C.IgnitusBlue} background={C.White} />
  </TagsContainer>
);

export default interfaceTags;
