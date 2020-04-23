import { AppIcon } from '../../../types/iconsTypes/iconEnums';

export type BtnSizeProps = {
  type: boolean;
};

export type BtnProps = {
  size: string;
  category: string;
  name: AppIcon;
  content: string;
};
