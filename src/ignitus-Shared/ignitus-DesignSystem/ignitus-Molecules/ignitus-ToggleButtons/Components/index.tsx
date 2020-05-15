import React from 'react';

import { StyledIcon } from '../styles';
import * as C from '../../../..';
import { ToggleButtonProps, ToggleIconButtonProps } from '../types';
import { ToggleButtonInterface } from './ToggleButtoninterface';

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  leftLabel,
  rightLabel,
  handleClick,
}) => {
  const active = 'primary';
  const inActive = 'grey';

  return (
    <ToggleButtonInterface
      activeCategory={active}
      inActiveCategory={inActive}
      handleClick={handleClick}
    >
      {{
        leftButtonContent: <> {leftLabel} </>,
        rightButtonContent: <> {rightLabel}</>,
      }}
    </ToggleButtonInterface>
  );
};

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
  leftIcon,
  rightIcon,
  handleClick,
}) => {
  const active = 'grey';
  const inActive = 'white';

  return (
    <ToggleButtonInterface
      activeCategory={active}
      inActiveCategory={inActive}
      handleClick={handleClick}
    >
      {{
        leftButtonContent: <StyledIcon color={C.IgnitusBlue} name={leftIcon} />,
        rightButtonContent: (
          <StyledIcon color={C.IgnitusBlue} name={rightIcon} />
        ),
      }}
    </ToggleButtonInterface>
  );
};
