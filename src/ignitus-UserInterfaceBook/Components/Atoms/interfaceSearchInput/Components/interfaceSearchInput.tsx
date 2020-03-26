import React from 'react';
import {SearchInputContainer} from '../styles';
import * as I from '../styles';
import {Heading1} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {DefaultSearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultSearchInput/Components';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/enums';
import {SearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/searchinput';
import {DashboardIcons} from '../constants';

const interfaceTypography = () => (
  <SearchInputContainer>
       <Heading1>Search Input: </Heading1>
       <hr/>
       <SearchInput><IconsMapper icons={DashboardIcons} /><DefaultSearchInput placeholder = {'Search @user'} type = {'text'} name = {'name'}/> </SearchInput>
  </SearchInputContainer>
);

const IconsMapper = ({icons}) => icons.map((icon: AppIcon) => <I.StyledIcon name={icon} />);

export default interfaceTypography;
