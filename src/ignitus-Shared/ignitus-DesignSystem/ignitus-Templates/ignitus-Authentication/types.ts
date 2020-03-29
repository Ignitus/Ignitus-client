import {ComponentState} from 'react';

export type userRole = 'Student' | 'Professor';
export type authType = 'Login' | 'Signup';

export interface authData {
  isFetching: boolean;
  message: string;
  success: boolean | undefined; // SEE PROFESSOR SIGNUP COMPONENT, remove undefined once implemented.
}

export interface LoginState {
  email: string;
  password: string;
  emptyMessage: boolean;
  invalidEmail: boolean;
  showPassword: boolean;
}

export interface SignupState extends LoginState {
  confirmPassword: string;
  equalmessage: boolean;
}

export interface Props {
  authenticationType: 'Login' | 'Signup';
  role: userRole;
  tagline: string;
  handleSubmit: Function;
  state: ComponentState;
  setState: Function;
  authenticationData: authData;
}
