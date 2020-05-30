import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../style';
import { AppIcon, useToggle } from '../../../ignitus-Shared';
import { allEdges } from '../constants';
import { NavigationLayerProps, LayerProps } from '../types';

export const InterfaceSideNavigation = () => (
  <S.NavigationContainer>
    <Link to="/">
      <S.StyledLogo name={AppIcon.IgnitusFullLogo} />
    </Link>
    <NavigationLayers edges={allEdges} level={0} />
  </S.NavigationContainer>
);

const NavigationLayers = ({
  edges,
  nesting = false,
  level,
}: NavigationLayerProps) => (
  <React.Fragment>
    {edges.map(edge => (
      <Layers edge={edge} nesting={nesting} key={edge.title} level={level} />
    ))}
  </React.Fragment>
);

const Layers = ({ edge, nesting, level }: LayerProps) => {
  const [isexpanded, toogleisexpanded] = useToggle(true);
  return (
    <React.Fragment key={edge.title}>
      {edge.route === undefined && (
        <S.HeadingArrowContainer
          onClick={toogleisexpanded}
          nesting={nesting}
          level={level}
        >
          {' '}
          <S.Heading nesting={nesting}>{edge.title}</S.Heading>{' '}
          <S.Arrow
            name={AppIcon.KeyBoardArrowRight}
            isexpanded={isexpanded}
            nesting={nesting}
          />
        </S.HeadingArrowContainer>
      )}
      <Extension
        isexpanded={isexpanded}
        edge={edge}
        nesting={nesting}
        level={level}
      />
    </React.Fragment>
  );
};

const Extension = ({ isexpanded, edge, nesting, level }) => {
  if (edge.route) {
    return (
      <Link to={edge.route} key={edge.title}>
        {' '}
        <S.ListItem nesting={nesting} level={level}>
          {edge.title}
        </S.ListItem>
      </Link>
    );
  }
  return (
    edge.children && (
      <S.UnorderedList isexpanded={isexpanded}>
        <NavigationLayers edges={edge.children} nesting level={level + 1} />
      </S.UnorderedList>
    )
  );
};
