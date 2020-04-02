export type Edges = {
  title: string;
  route?: string;
  children?: Edges[];
};

export type Children = {
  title: string;
  route: string | null;
  children?: Edges[];
};

export type NavigationLayerProps = {
  edge: Edges;
  nesting?: boolean;
  level: number;
};
