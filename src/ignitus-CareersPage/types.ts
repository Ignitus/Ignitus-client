export type PerksType = {
  content: string;
};

export type OpportunityListType = {
  type: string;
  picture: string;
  openings: OpeningsType[];
};

type OpeningsType = {
  title: string;
};
