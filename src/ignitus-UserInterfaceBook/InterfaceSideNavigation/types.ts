export type Edges = {
  node: {
    title: string;
    children: Children[];
  };
};

export type Children = {
  title: string;
  route: string | null;
  children?: Edges[];
};

export type NavigationLayerProps = {
  edge: Edges;
  nesting?: boolean;
};
