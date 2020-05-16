/**
 * Hook used in ignitus-ToggleButtons
 */
import { useState } from 'react';

type categoriesType = {
  leftButton: string;
  rightButton: string;
};

type useActiveReturn = [categoriesType, Function];

type buttonTypes = 'left' | 'right';

/**
 * active, inActive are category of button => 'primary' 'white' 'grey' etc.
 */
export const useActive = (
  active: string,
  inActive: string,
): useActiveReturn => {
  const [categories, updateCategories] = useState({
    leftButton: active,
    rightButton: inActive,
  });

  const setActive = (button: buttonTypes, clickHandler?: Function): void => {
    if (button === 'left' && categories.leftButton !== active) {
      updateCategories({
        leftButton: active,
        rightButton: inActive,
      });
    } else if (button === 'right' && categories.rightButton !== active) {
      updateCategories({
        leftButton: inActive,
        rightButton: active,
      });
    }
    if (clickHandler) clickHandler(button);
  };

  return [categories, setActive];
};
