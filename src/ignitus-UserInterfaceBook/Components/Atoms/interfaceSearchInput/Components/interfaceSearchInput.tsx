import React from 'react';
import * as I from '../styles';
import {StyledHeading2} from '../../../../styles';
import {SearchInputContainer} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/searchInput';
import { SearchNameField} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/searchInput'
// import SearchIcon from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/SearchIcon/searchIcon'
import {DashboardIcons} from '../constants'
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/enums';
import DefaultSearch from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitius-defaultSearch/Components/defaultSearch';

const interfaceSearchInput = () => (
    <SearchInputContainer>  
        <StyledHeading2>Search Input Field:</StyledHeading2>
            <hr />
            <SearchNameField >
            <IconsMapper icons={DashboardIcons} /> < DefaultSearch placeholder = {'Search @user'} type = {'text'} name = {'name'}/>
            </SearchNameField>
    </SearchInputContainer>
);

const IconsMapper = ({icons}) => icons.map((icon: AppIcon) => <I.StyledIcon name={icon} />); 

export default interfaceSearchInput;