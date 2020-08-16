import { SavedJobCardData, Option } from './types';

export const OpenJobData: SavedJobCardData[] = [
  {
    id: '1',
    lastUpdated: '9 June',
    location: 'Location',
    poster: 'Internship poster',
    title: 'Internship Title',
    avatar:
      'https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png',
  },
  {
    id: '2',
    lastUpdated: '9 June',
    location: 'Location',
    poster: 'Internship poster',
    title: 'Internship Title',
    avatar:
      'https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png',
  },
  {
    id: '3',
    lastUpdated: '9 June',
    location: 'Location',
    poster: 'Internship poster',
    title: 'Internship Title',
    avatar:
      'https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png',
  },
];

export const DraftJobData: SavedJobCardData[] = [
  {
    id: '1',
    lastUpdated: '9 June',
    location: 'Location',
    poster: 'Internship poster',
    title: 'Internship Title',
    avatar:
      'https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png',
  },
];

const demoFucntion: Function = e => {
  console.log(`Function Call on ${e.title}`);
};

export const OpenJobOptions: Option[] = [
  {
    id: '0',
    title: 'View Applicants',
    action: demoFucntion,
  },
  {
    id: '1',
    title: 'View Job',
    action: demoFucntion,
  },
  {
    id: '2',
    title: 'Edit Job',
    action: demoFucntion,
  },
  {
    id: '3',
    title: 'Share Job',
    action: demoFucntion,
  },
  {
    id: '4',
    title: 'Unpublish Job',
    action: demoFucntion,
  },
  {
    id: '5',
    title: 'Delete Job',
    action: demoFucntion,
  },
];

export const DraftJobOptions: Option[] = [
  {
    id: '0',
    title: 'Edit Job',
    action: demoFucntion,
  },
  {
    id: '1',
    title: 'Delete Job',
    action: demoFucntion,
  },
];
