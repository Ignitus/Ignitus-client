import {
  LoginState,
  SignupState
} from './types';

export const LoginStatePayload: LoginState = {
  email: '',
  password: '',
  showPassword: false,
  emptyMessage: false,
  invalidEmail: false,
};

export const SignupStatePayload: SignupState = {
  ...LoginStatePayload,
  confirmPassword: '',
  equalmessage: false,
};
