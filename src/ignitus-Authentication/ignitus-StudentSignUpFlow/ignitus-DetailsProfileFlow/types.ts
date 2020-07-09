import { AppIcon } from '../../../ignitus-Shared';

export type HeadingProps = {
  title: string;
  icon: AppIcon;
  fontStyle?: string;
};

export type TitleProps = {
  fontStyle?: string;
};

export type EducationProps = {
  university: string;
  address: string;
  batch: string;
};

export type IconProps = {
  color: string;
  background: string;
};
