export type InputType = {
  placeholder: string;
  type: string;
  name: string;
  height?: string;
  width?: string;
  handleChange?(inputValue: string): Function;
};
