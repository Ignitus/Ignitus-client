import {authData} from '../../ignitus-Shared';

export interface LogInProps {
  logInRequest: Function;
  logInData: authData;
  clearPreviousLogin: Function;
};
