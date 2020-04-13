import {AppIcon} from '../../../types/iconsTypes/iconEnums';

export type InputTypes = {
  type: string;
  name: AppIcon;
  placeholder: string;
  handleClick?: ((value: string) => void) | ((value: string) => null);
  handleChange: (value: string) => void;
};