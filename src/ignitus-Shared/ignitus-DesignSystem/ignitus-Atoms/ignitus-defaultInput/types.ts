export type InputType = {
  placeholder: string;
  type: string;
  name: string;
  handleChange?(inputValue: string): Function;
};
