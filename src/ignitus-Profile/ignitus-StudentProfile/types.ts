import {AppIcon} from '../../ignitus-Shared/types/iconsTypes/iconEnums';

export type HeadingProps = {
  title: string;
  icon:AppIcon;
};

export type AboutProps = {
  content: string;
};

export type ContributionsProps = {
  articles: string;
  polls: string;
  publications: string;
  videos: string;
};
export type PublicationsProps = {
  content: string;
};

export type EducationProps = {
  university: string;
  address: string;
  batch: string;
};

export type RecommendationsProps = {
  name: string;
  designation: string;
  date: string;
  experience: string;
};
