export type Edges = {
  title: string;
  route?: string;
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
  level?: number;
};

export type LayerProps = {
  edge: Edges;
  nesting?: boolean;
  level?: number;
};
