import { avatar } from './types';

const pre = 'https://storage.googleapis.com/ignitus_assets/ig-avatars/avataaars';

const avatarNames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21'
];

export const avatars: avatar[] = avatarNames.map((avatar) => ({
  name: avatar,
  src: `${pre}${avatar}.svg`,
}));


// Avatars from https://getavataaars.com/