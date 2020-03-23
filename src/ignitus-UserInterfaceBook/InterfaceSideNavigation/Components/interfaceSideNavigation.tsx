import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../style';
import {AppIcon} from '../../../ignitus-Shared/types/iconsTypes/enums';
import useToggle from '../../../ignitus-Shared/ignitus-Utilities/reactHooks/toogleHook';
import {edges} from '../constants';
import {NavigationLayerProps} from '../types';

const InterfaceSideNavigation = () => {
  return (
    <S.NavigationContainer>
      <Link to="/">
        <S.StyledLogo name={AppIcon.IgnitusFullLogo} />
      </Link>
      {edges.map(edge => (
        <NavigationLayers edge={edge} key={edge.node.title} />
      ))}
    </S.NavigationContainer>
  );
};

const NavigationLayers = ({edge, nesting = false}: any) => {
  const [isexpanded, toogleisexpanded] = useToggle(true);
  const navigation = (
    <React.Fragment key={edge.node.title}>
      <S.HeadingArrowContainer onClick={toogleisexpanded}>
        {' '}
        <S.Heading nesting={nesting}>{edge.node.title}</S.Heading>{' '}
        <S.Arrow name={AppIcon.KeyBoardArrowRight} isexpanded={isexpanded} />
      </S.HeadingArrowContainer>

      {edge.node.children ? (
        <UnorderedList isexpanded={isexpanded} edge={edge} nesting={nesting} />
      ) : null}
    </React.Fragment>
  );
  return navigation;
};

const UnorderedList = ({isexpanded, edge, nesting}) => (
  <S.UnorderedList isexpanded={isexpanded}>
    {edge.node.children.map(x =>
      x.children ? (
        /* In future if we have to support III Level of nesting, we will run another loop here. */
        <NavigationLayers edge={x.children[0]} key={x.title} nesting={true} />
      ) : (
        <Link to={x.route} key={x.title}>
          {' '}
          <S.ListItem nesting={nesting}>{x.title}</S.ListItem>
        </Link>
      ),
    )}
  </S.UnorderedList>
);

export default InterfaceSideNavigation;
