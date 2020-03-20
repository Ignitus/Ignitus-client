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




const KitSideNavigation = () => {
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
  const [isExpanded, toogleIsExpanded] = useToggle(true);
  const navigation = edges.map(menuItem => (
    <React.Fragment>
      <S.HeadingArrowContainer onClick={toogleIsExpanded}>
        {' '}
        <S.Heading>{menuItem.node.title}</S.Heading>{' '}
        <S.Arrow name={AppIcon.KeyBoardArrowRight} isExpanded={isExpanded} />
      </S.HeadingArrowContainer>

      {menuItem.node.children ? (
        <UnorderedList isExpanded={isExpanded} menuItem={menuItem} />
      ) : null}
    </React.Fragment>
  ));
  return navigation;
};

const UnorderedList = ({isExpanded, menuItem}) => (
  <S.UnorderedList isExpanded={isExpanded}>
    {menuItem.node.children.map(({title, route}) => (
      <S.ListItem>
        <Link to={route}>{title}</Link>
      </S.ListItem>
    ))}
  </S.UnorderedList>
);

export default KitSideNavigation;
