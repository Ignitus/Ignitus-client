import React from 'react';

type UseToggleReturn = [boolean, () => void];

export const useToggle = (inititalValue = false): UseToggleReturn => {
  const [value, setValue] = React.useState<boolean>(inititalValue);

  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
};
