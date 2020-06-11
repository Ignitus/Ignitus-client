export interface LayerProps {
  text: string;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  semiBold?: boolean;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  [rest: string]: any;
}

export type StyledLayerProps = {
  border: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  containIcon?: boolean;
  alignCenter?: boolean;
  semiBold?: boolean;
};
