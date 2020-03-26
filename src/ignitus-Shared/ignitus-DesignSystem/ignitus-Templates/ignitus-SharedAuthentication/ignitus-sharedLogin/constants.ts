import { statePayLoadProps } from './types';

export const logo: string =
  'https://storage.googleapis.com/ignitus_assets/ig-logo/IgnitusLogos_SVG%20Logo.svg';
export const studentAuth: string =
  'https://storage.googleapis.com/ignitus_assets/ig-assets/Assets_studentAuth.svg';
export const professorAuth: string =
  'https://storage.googleapis.com/ignitus_assets/ig-assets/Assets_professorAuth.svg';

export const statePayload: statePayLoadProps = {
  email: '',
  password: '',
  emptyMessage: false,
  invalidEmail: false,
  showPassword: false,
};
