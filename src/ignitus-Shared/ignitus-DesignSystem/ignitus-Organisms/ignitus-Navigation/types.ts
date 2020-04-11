export type displayClassTypes = 'transparent' | 'whitenav';

export interface PureNavigationProps {
  displayClass: displayClassTypes;
  dynamicLogo: string;
};

export interface NavigationProps {
  dynamicNavigation?: boolean;
};
