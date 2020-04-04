import {SM, MD, XXS} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  GreyBackground,
  White,
  GreyLight,
  IgnitusBlue,
  SecondaryColor,
  Grey2,
} from '../../ignitus-DesignSystem/ignitus-Atoms/colors';
import {AppSize} from '../../types/sizeTypes/sizeEnums';
import {CategoryEnums} from '../../types/categoryTypes/categoryEnums';

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

export const getColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return White;

    case CategoryEnums.Secondary:
      return IgnitusBlue;

    case CategoryEnums.Grey:
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
  }
};

export const getBorder = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return 'none';

    case CategoryEnums.Secondary:
      return `2px solid ${IgnitusBlue}`;

    case CategoryEnums.Grey:
      return 'none';
  }
};

export const getHoverColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return IgnitusBlue;

    case CategoryEnums.Secondary:
      return `none`;

    case CategoryEnums.Grey:
      return IgnitusBlue;
  }
};

export const getHoverBackgroundColor = ({category}: ButtonProperties) => {
  switch (category) {
    case CategoryEnums.Primary:
      return SecondaryColor;

    case CategoryEnums.Secondary:
      return `none`;

    case CategoryEnums.Grey:
      return Grey2;
  }
};

export const hexDifferentiate = color => {
  const result = hexArray.indexOf(color);
  return result === -1 ? false : true;
};
