export type PerksType = {
  content: string;
  picture: string;
};

export type OpportunityListType = {
  type: string;
  picture: string;
  openings: OpeningsType[];
};

type OpeningsType = {
  title: string;
};

export type RowTypes = {
  flex?: number;
  alignment?: string;
};
