import {AppIcon} from '../../../types/iconsTypes/iconEnums';

export type DefaultIconInputProperties = {
  type: string;
  name: AppIcon;
  placeholder: string;
  handleClick?: ((value: string) => void) | ((value: string) => null);
  handleChange: (value: string) => void;
};

export type DefaultPasswordInputProperties = {
  type: string;
  iconOneName: AppIcon;
  iconTwoName: AppIcon;
  placeholder: string;
  handleClick: (value: string) => void;
  handleChange: (value: string) => void;
};
