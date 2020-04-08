import {ReactNode, ErrorInfo} from 'react';

export interface Props {
  children: ReactNode;
}

export interface State {
  error: string | null;
  errorInfo: ErrorInfo | null;
}
