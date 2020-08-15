export type Props = {
  title: string;
  location: string;
  lastUpdated: string;
  poster: string;
  avatar: string;
  jobOptions: Option[];
  isDraft?: boolean;
};

export type Option = {
  title: string;
  action: Function;
  id: string;
};

export type MenuProps = {
  jobOptions: Option[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
