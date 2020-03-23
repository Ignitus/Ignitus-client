import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../style';
import {AppIcon} from '../../../ignitus-Shared/types/iconsTypes/enums';
import useToggle from '../../../ignitus-Shared/ignitus-Utilities/reactHooks/toogleHook';
import {
  moleculesEdges,
  atomsEdges,
  templatesEdges,
  layoutEdges,
  organismsEdges,
} from '../constants';
import {NavigationLayerProps} from '../types';

const InterfaceSideNavigation = () => {
  return (
    <S.NavigationContainer>
      <Link to="/">
        <S.StyledLogo name={AppIcon.IgnitusFullLogo} />
      </Link>

      <NavigationLayers edges={atomsEdges} />
      <NavigationLayers edges={organismsEdges} />
      <NavigationLayers edges={moleculesEdges} />
      <NavigationLayers edges={templatesEdges} />
      <NavigationLayers edges={layoutEdges} />
    </S.NavigationContainer>
  );
};

const NavigationLayers = ({edges, nesting = false}: NavigationLayerProps) => {
  const [isexpanded, toogleisexpanded] = useToggle(true);
  const navigation = edges.map(menuItem => (
    <React.Fragment key={menuItem.node.title}>
      <S.HeadingArrowContainer onClick={toogleisexpanded}>
        {' '}
        <S.Heading nesting={nesting}>{menuItem.node.title}</S.Heading>{' '}
        <S.Arrow name={AppIcon.KeyBoardArrowRight} isexpanded={isexpanded} />
      </S.HeadingArrowContainer>

      {menuItem.node.children ? (
        <UnorderedList
          isexpanded={isexpanded}
          menuItem={menuItem}
          nesting={nesting}
        />
      ) : null}
    </React.Fragment>
  ));
  return navigation;
};

const UnorderedList = ({isexpanded, menuItem, nesting}) => (
  <S.UnorderedList isexpanded={isexpanded}>
    {menuItem.node.children.map(x => {
      return x.children ? (
        <NavigationLayers edges={x.children} key={x.title} nesting={true} />
      ) : (
        <Link to={x.route} key={x.title}>
          {' '}
          <S.ListItem nesting={nesting}>{x.title}</S.ListItem>
        </Link>
      );
    })}
  </S.UnorderedList>
);

export default InterfaceSideNavigation;
