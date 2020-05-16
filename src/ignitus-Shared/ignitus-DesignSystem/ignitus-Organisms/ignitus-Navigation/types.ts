export interface NavigationProps {
  transparentNavigation?: boolean;
  padding?: string;
}

export type ToggleProps = {
  isExpanded: boolean;
};

export type NavigationItems = {
  title: string;
  route: string;
};
