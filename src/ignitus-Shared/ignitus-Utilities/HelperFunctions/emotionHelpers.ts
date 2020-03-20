import {SM, MD, XXS} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';

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
