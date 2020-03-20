import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../style';
import {AppIcon} from '../../../../ignitus-Shared/types/iconsTypes/enums';
import useToggle from '../../../../ignitus-Shared/ignitus-Utilities/reactHooks/toogleHook';
import {
  moleculesEdges,
  atomsEdges,
  templatesEdges,
  layoutEdges,
  organismsEdges,
} from '../constants';

const interfaceSideNavigation = () => {
  return (
    <S.NavigationContainer>
      <NavigationLayers edges={atomsEdges} />
      <NavigationLayers edges={organismsEdges} />
      <NavigationLayers edges={moleculesEdges} />
      <NavigationLayers edges={templatesEdges} />
      <NavigationLayers edges={layoutEdges} />
    </S.NavigationContainer>
  );
};

const NavigationLayers = ({edges}: any) => {
  const [isexpanded, toogleisexpanded] = useToggle(true);
  const navigation = edges.map(menuItem => (
    <React.Fragment key={menuItem.node.title}>
      <S.HeadingArrowContainer onClick={toogleisexpanded}>
        {' '}
        <S.Heading>{menuItem.node.title}</S.Heading>{' '}
        <S.Arrow name={AppIcon.KeyBoardArrowRight} isexpanded={isexpanded} />
      </S.HeadingArrowContainer>

      {menuItem.node.children ? (
        <UnorderedList isexpanded={isexpanded} menuItem={menuItem} />
      ) : null}
    </React.Fragment>
  ));
  return navigation;
};

const UnorderedList = ({isexpanded, menuItem}) => (
  <S.UnorderedList isexpanded={isexpanded}>
    {menuItem.node.children.map(({title, route}) => (
      <Link to={route}>
        {' '}
        <S.ListItem key={title}>{title}</S.ListItem>
      </Link>
    ))}
  </S.UnorderedList>
);

export default interfaceSideNavigation;
