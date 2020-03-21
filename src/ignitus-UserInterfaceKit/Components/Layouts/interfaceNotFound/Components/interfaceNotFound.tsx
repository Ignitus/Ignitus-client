import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {Notfound} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components/index';
import { NotFoundContainer } from '../style';

const interfaceNotFound = () => (
  <NotFoundContainer>
    <StyledHeading2>Not Found ★</StyledHeading2>
    <hr />
    <Notfound />
  </NotFoundContainer>
);

export default interfaceNotFound;
