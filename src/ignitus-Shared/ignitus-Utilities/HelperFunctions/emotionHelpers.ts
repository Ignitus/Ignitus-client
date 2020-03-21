import {SM, MD, XXS} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  GreyBackground,
  White,
  GreyLight,
} from '../../ignitus-DesignSystem/ignitus-Atoms/colors';

const hexArray = [GreyBackground, White, GreyLight];

export const getPadding = (props: BtnSizeProps) => {
  if (props.medium) {
    return '8px 20px';
  } else if (props.small) {
    return '4px 15px';
  } else {
    return '16px 32px';
  }
};

export const getFontSizes = (props: BtnSizeProps) => {
  if (props.medium) {
    return SM;
  } else if (props.small) {
    return XXS;
  } else {
    return MD;
  }
};

export const getRadius = (props: BtnSizeProps) => {
  if (props.medium || props.small) {
    return '3px';
  } else {
    return '5px';
  }
};

export type BtnSizeProps = {
  medium?: boolean;
  small?: boolean;
};

export const hexDifferentiate = color => {
  const result = hexArray.indexOf(color);
  return result === -1 ? false : true;
};
