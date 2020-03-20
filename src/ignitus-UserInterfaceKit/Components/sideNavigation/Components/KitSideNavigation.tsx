import React from 'react';
import * as S from '../style';
import {edges} from '../constants';
import {AppIcon} from '../../../../ignitus-Shared/types/iconsTypes/enums';

class KitSideNavigation extends React.Component {
  render() {
    const navigation = edges.map(menuItem => (
      <React.Fragment>
        <S.HeadingArrowContainer>
          {' '}
          <S.Heading>{menuItem.node.title}</S.Heading>{' '}
          <S.Arrow name={AppIcon.KeyBoardArrowRight} />
        </S.HeadingArrowContainer>

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
