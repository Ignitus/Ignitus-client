import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../style';
import {AppIcon} from '../../../ignitus-Shared/types/iconsTypes/enums';
import useToggle from '../../../ignitus-Shared/ignitus-Utilities/reactHooks/toogleHook';
import {edges} from '../constants';
import {NavigationLayerProps} from '../types';

const InterfaceSideNavigation = () => (
  <S.NavigationContainer>
    <Link to="/">
      <S.StyledLogo name={AppIcon.IgnitusFullLogo} />
    </Link>
    {edges.map(edge => (
      <NavigationLayers edge={edge} key={edge.title} level={0} />
    ))}
  </S.NavigationContainer>
);

const NavigationLayers = ({ edge, nesting = false, level }: NavigationLayerProps) => {
  const [isexpanded, toggleExpansion] = useToggle(true);
  if (edge.route) {
    return (
      <Link to={edge.route} key={edge.title}>
        {' '}
        <S.ListItem nesting={nesting} level={level}>{edge.title}</S.ListItem>
      </Link>
    );
  }
  return (
    <React.Fragment key={edge.title}>
      <S.HeadingArrowContainer onClick={toggleExpansion} nesting={nesting} level={level}>
        {' '}
        <S.Heading nesting={nesting} level={level}>{edge.title}</S.Heading>{' '}
        <S.Arrow
          name={AppIcon.KeyBoardArrowRight}
          isexpanded={isexpanded}
          nesting={nesting}
        />
      </S.HeadingArrowContainer>
      {edge.children
        && (<S.UnorderedList isexpanded={isexpanded}>
          {edge.children.map(child => (
            <NavigationLayers edge={child} nesting level={level+1} key={`${child.title}_nav`}/>
          ))}
        </S.UnorderedList>)}
    </React.Fragment>
  );
}

export default InterfaceSideNavigation;
