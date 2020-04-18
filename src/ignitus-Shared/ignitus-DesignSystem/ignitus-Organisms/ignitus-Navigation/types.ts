export interface NavigationProps {
  transparentNavigation?: boolean;
}

export type ToggleProps = {
  isExpanded: boolean;
};

export type NavigationItems = {
  title: string;
  route: string;
};
