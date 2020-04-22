import { avatar } from './types';

const pre = 'https://storage.googleapis.com/ignitus_assets/ig-avatars/';

const avatarNames = [
  'grant',
  'melanie',
  'george',
  'eugene'
];

export const avatars: avatar[] = avatarNames.map((avatar) => ({
  name: avatar,
  src: `${pre}${avatar}.png`,
}));
