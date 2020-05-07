import { ReactNode } from 'react';
import { AppIcon } from '../../../types/iconsTypes/iconEnums';

type handleClickType = (whichButtonClicked: 'left' | 'right') => void;

export type ToggleButtonProps = {
  leftLabel: string;
  rightLabel: string;
  handleClick?: handleClickType;
};

export type ToggleIconButtonProps = {
  leftIcon: AppIcon;
  rightIcon: AppIcon;
  handleClick?: handleClickType;
};

export interface ToggleButtonInterfaceProps {
  activeCategory: string;
  inActiveCategory: string;
  children: {
    leftButtonContent: ReactNode;
    rightButtonContent: ReactNode;
  };
  handleClick?: handleClickType;
}
