import { ComponentState } from 'react';

export type userRole = 'Student' | 'Professor';
export type authType = 'LogIn' | 'SignUp';

export interface AuthData {
  isFetching: boolean;
  message: string;
  success: boolean | undefined;
}

export interface LoginState {
  userName: string;
  email: string;
  password: string;
  emptyMessage: boolean;
  invalidEmail: boolean;
  showPassword: boolean;
}

export interface SideWrapperProps {
  role: userRole;
  authenticationType: authType;
  alternateRole: userRole;
}

export interface FormProps {
  role: userRole;
  authenticationType: authType;
  alternateAuth: authType;
  authRedirectText: string;
  state: ComponentState;
  setState: Function;
  authenticationData: AuthData;
  handleSubmit: Function;
}

export interface SignupState extends LoginState {
  userName: string;
  confirmPassword: string;
  equalmessage: boolean;
}

export interface Props {
  authenticationType: 'LogIn' | 'SignUp';
  role: userRole;
  handleSubmit: Function;
  state: ComponentState;
  setState: Function;
  authenticationData: AuthData;
}
