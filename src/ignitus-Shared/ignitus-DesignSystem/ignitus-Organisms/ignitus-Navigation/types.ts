export type displayClassTypes = 'transparent' | 'whitenav';

export interface PureNavigationProps {
  displayClass: displayClassTypes;
  dynamicLogo: any;
};

export interface NavigationProps {
  dynamicNavigation?: boolean;
};
