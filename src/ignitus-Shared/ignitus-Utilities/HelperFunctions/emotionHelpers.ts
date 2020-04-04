import {SM, MD, XXS} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  GreyBackground,
  White,
  GreyLight,
} from '../../ignitus-DesignSystem/ignitus-Atoms/colors';
import {AppSize} from '../../types/sizeTypes/sizeEnums';

const hexArray = [GreyBackground, White, GreyLight];

export type ButtonProperties = {
  size?: string;
  category?: string;
};

export const getPadding = ({size}: ButtonProperties) => {
  switch (size) {
    case AppSize.Small:
      return '4px 15px';

    case AppSize.Medium:
      return '8px 20px';

    case AppSize.Large:
      return '16px 32px';
  }
};

export const getFontSizes = ({size}: ButtonProperties) => {
  switch (size) {
    case AppSize.Small:
      return XXS;

    case AppSize.Medium:
      return SM;

    case AppSize.Large:
      return MD;
  }
};

export const getRadius = ({size}: ButtonProperties) => {
  switch (size) {
    case AppSize.Small:
      return '3px';

    case AppSize.Medium:
      return '3px';

    case AppSize.Large:
      return '5px';
  }
};

export const hexDifferentiate = color => {
  const result = hexArray.indexOf(color);
  return result === -1 ? false : true;
};
