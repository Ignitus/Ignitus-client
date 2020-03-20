import React from 'react';
import * as S from './style';
import {Heading2} from '../userInterfaceKit/styles';

class KitSideNavigation extends React.Component {
  render() {
    return (
      <S.NavigationContainer>
        <S.Heading> Atoms</S.Heading>
      </S.NavigationContainer>
    );
  }
}

export default KitSideNavigation;
