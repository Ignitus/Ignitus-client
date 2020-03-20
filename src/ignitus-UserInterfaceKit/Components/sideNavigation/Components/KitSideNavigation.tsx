import React from 'react';
import * as S from '../style';
import {edges} from '../constants';

class KitSideNavigation extends React.Component {
  render() {
    const navigation = edges.map(menuItem => (
      <React.Fragment>
        <S.Heading>{menuItem.node.title}</S.Heading>
        {menuItem.node.children ? (
          <S.UnorderedList>
            {menuItem.node.children.map(({title}) => (
              <S.ListItem>{title}</S.ListItem>
            ))}
          </S.UnorderedList>
        ) : null}
      </React.Fragment>
    ));
    return <S.NavigationContainer>{navigation}</S.NavigationContainer>;
  }
}

export default KitSideNavigation;
