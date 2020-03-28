import React from 'react';
import {SearchInputContainer} from '../styles';
import * as I from '../styles';
import {Heading1} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {DefaultSearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultSearchInput/Components';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/enums';
// import icon from '../../../ignitus-Utilities/Components/icon';

// import {SearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/searchinput';
import {DashboardIcons} from '../constants';

const interfaceTypography = () => (
  <SearchInputContainer>
       <Heading1>Search Input: </Heading1>
       <hr/>
       {/* <SearchInput> */}
           
         <DefaultSearchInput placeholder = {'Search @user'} type = {'text'} name = {'name'}/> 
         {/* <IconsMapper icons={DashboardIcons} /> */}
         {/* </SearchInput> */}
  </SearchInputContainer>
);



export default interfaceTypography;
