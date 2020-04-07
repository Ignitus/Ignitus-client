import {AppIcon} from '../../../types/iconsTypes/iconEnums';
import { string } from 'prop-types';
export type InputTypes = {
  type: string;
  name: AppIcon;
  placeholder: string;
  handleClick: (value: string) => void;
  position: string;
};

export type InputContainerProps = {
  position: string;
}