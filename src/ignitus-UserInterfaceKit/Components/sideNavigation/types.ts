export type Edges = {
  node: {
    title: string;
    children: children[];
  };
};

export type children = {
  title: string;
  route: string | null;
};