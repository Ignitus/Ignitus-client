export type Edges = {
  title: string;
  children: Children[];
};

export type Children = {
  title: string;
  route?: string;
  children?: Children[];
};

export type NavigationLayerProps = {
  edges: Edges[];
  nesting?: boolean;
};
