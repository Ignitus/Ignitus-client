import {SM, MD, XXS} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  GreyBackground,
  White,
  GreyLight,
  IgnitusBlue,
  SecondaryColor,
  GreyTwo,
  Red,
  GreySecondaryText,
} from '../../ignitus-DesignSystem/ignitus-Atoms/colors';
import {AppSize} from '../../types/sizeTypes/sizeEnums';
import {CategoryEnums} from '../../types/categoryTypes/categoryEnums';
import {Green, Yellow} from '../../ignitus-DesignSystem/ignitus-Atoms/colors';

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

export const getIconDimension = ({size}: ButtonProperties) => {
  switch (size) {
    case AppSize.Small:
      return '0.7rem';

    case AppSize.Medium:
      return '0.9rem';

    case AppSize.Large:
      return '1.2rem';
  }
};

export const getColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return White;

    case CategoryEnums.Red:
      return White;

    case CategoryEnums.Green:
      return White;

    case CategoryEnums.Orange:
      return IgnitusBlue;

    case CategoryEnums.Yellow:
      return GreySecondaryText;

    case CategoryEnums.Disabled:
      return GreySecondaryText;

    default:
      return IgnitusBlue;
  }
};

export const getBackgroundColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return IgnitusBlue;

    case CategoryEnums.Secondary:
      return White;

    case CategoryEnums.Grey:
      return GreyLight;

    case CategoryEnums.Orange:
      return SecondaryColor;

    case CategoryEnums.White:
      return White;

    case CategoryEnums.Red:
      return Red;

    case CategoryEnums.Green:
      return Green;

    case CategoryEnums.Yellow:
      return Yellow;

    case CategoryEnums.Disabled:
      return GreyLight;

    case CategoryEnums.Text:
      return 'inherit';
  }
};

export const getBorder = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Secondary:
      return `2px solid ${IgnitusBlue}`;

    default:
      return 'none';
  }
};

export const getHoverColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return IgnitusBlue;

    case CategoryEnums.Grey:
      return IgnitusBlue;

    case CategoryEnums.Text:
      return IgnitusBlue;

    default:
      return 'none';
  }
};

export const getHoverBackgroundColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return SecondaryColor;

    case CategoryEnums.Grey:
      return GreyTwo;

    case CategoryEnums.Text:
      return GreyLight;

    default:
      return 'none';
  }
};

export const hexDifferentiate = color => {
  const result = hexArray.indexOf(color);
  return result === -1 ? false : true;
};
