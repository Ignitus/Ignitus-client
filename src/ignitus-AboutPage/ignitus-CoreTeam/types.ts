export type Team = {
  title: string;
  img: string;
  description: string;
  linkedin: string;
  angellist: string;
};

export type TeamItemProps = {
  key: string;
  item: Team;
};
