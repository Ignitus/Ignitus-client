import React from 'react';

import { ToggleButtonContainer, ButtonLeft, ButtonRight } from '../styles';
import { useActive } from '../../../../index';
import { ToggleButtonInterfaceProps } from '../types';

export const ToggleButtonInterface: React.FC<ToggleButtonInterfaceProps> = ({
  activeCategory,
  children,
  inActiveCategory,
  handleClick,
}) => {
  const { leftButtonContent, rightButtonContent } = children;

  const [categories, setActive] = useActive(activeCategory, inActiveCategory);

  return (
    <ToggleButtonContainer>
      <ButtonLeft
        size="medium"
        category={categories.leftButton}
        onClick={() => setActive('left', handleClick)}
      >
        {leftButtonContent}
      </ButtonLeft>
      <ButtonRight
        size="medium"
        category={categories.rightButton}
        onClick={() => setActive('right', handleClick)}
      >
        {rightButtonContent}
      </ButtonRight>
    </ToggleButtonContainer>
  );
};
