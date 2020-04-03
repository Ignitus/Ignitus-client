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
      <NavigationLayers edges={edges} />
    </S.NavigationContainer>
  );
};

const NavigationLayers = ({edges, nesting = false}: NavigationLayerProps) => (
  <React.Fragment>
    {edges.map(edge => (
      <Layers edge={edge} nesting={nesting} key={edge.title} />
    ))}
  </React.Fragment>
);

const Layers = ({edge, nesting}: any) => {
  const [isexpanded, toogleisexpanded] = useToggle(true);
  return (
    <React.Fragment>
      {edge.route == undefined && (
        <S.HeadingArrowContainer onClick={toogleisexpanded} nesting={nesting}>
          {' '}
          <S.Heading nesting={nesting}>{edge.title}</S.Heading>{' '}
          <S.Arrow
            name={AppIcon.KeyBoardArrowRight}
            isexpanded={isexpanded}
            nesting={nesting}
          />
        </S.HeadingArrowContainer>
      )}
      <Extension isexpanded={isexpanded} edge={edge} nesting={nesting} />
    </React.Fragment>
  );
};

const Extension = ({isexpanded, edge, nesting}) => {
  if (edge.route) {
    return (
      <Link to={edge.route} key={edge.title}>
        {' '}
        <S.ListItem nesting={nesting}>{edge.title}</S.ListItem>
      </Link>
    );
  }
  return (
    edge.children && (
      <S.UnorderedList isexpanded={isexpanded}>
        <NavigationLayers edges={edge.children} nesting={true} />
      </S.UnorderedList>
    )
  );
};

export default InterfaceSideNavigation;
