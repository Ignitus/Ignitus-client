export type Edges = {
  node: {
    title: string;
    children: Children[];
  };
};

export type Children = {
  title: string;
  route: string | null;
};