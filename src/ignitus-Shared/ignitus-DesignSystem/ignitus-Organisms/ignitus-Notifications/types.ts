export type InputTypes = {
  textColor: string;
  titleColor: string;
  bgColor: string;
  picture?: string;
  title?: string;
  textLeft?: string;
  textRight?: string;
  onRemove?(): void;
};

export type StyledTagProps = {
  bgColor: string;
  color: string;
};
