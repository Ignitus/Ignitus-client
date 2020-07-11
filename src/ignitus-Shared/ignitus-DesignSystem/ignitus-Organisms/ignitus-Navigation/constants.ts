import { NavigationItems } from './types';

export const NonAuthenticatedNavigationItemsList: NavigationItems[] = [
  {
    title: 'Home',
    route: '/#',
  },

  {
    title: 'About',
    route: '/aboutus',
  },

  {
    title: 'Join',
    route: 'https://bit.ly/JoinIgnitusSlack',
  },

  {
    title: 'Sign in',
    route: '/login',
  },

  {
    title: 'Sign up',
    route: '/signup',
  },
];

export const AuthenticatedNavigationItemsList: NavigationItems[] = [
  {
    title: 'Home',
    route: '/#',
  },

  {
    title: 'About',
    route: '/aboutus',
  },

  {
    title: 'Join',
    route: 'https://bit.ly/JoinIgnitusSlack',
  },

  {
    title: 'Dashboard',
    route: '/dashboard',
  },
];
