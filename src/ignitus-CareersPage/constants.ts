import { PerksType, OpportunityListType } from './types';

export const OpportunityList: OpportunityListType[] = [
  {
    type: 'Design',
    picture:
      'https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarFour.svg',
    openings: [
      {
        title: 'Product Designer Internship',
      },
      {
        title: 'Graphic Designer Internship',
      },
    ],
  },

  {
    type: 'Software Development',
    picture:
      'https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarThree.svg',
    openings: [
      {
        title: 'SWE Internship',
      },
      {
        title: 'Front End Internship',
      },
    ],
  },

  {
    type: 'Marketing',
    picture:
      'https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarFive.svg',
    openings: [
      {
        title: 'SEO Analyst Internship',
      },
      {
        title: 'Marketing Internship',
      },
    ],
  },

  {
    type: 'Other',
    picture:
      'https://storage.googleapis.com/ignitus_assets/ig-careers/careerPageAvatarSix.svg',
    openings: [
      {
        title: 'Ignitus Scholar Internship',
      },
      {
        title: 'Content Writing Internship',
      },
    ],
  },
];

export const PerksObject: PerksType[] = [
  {
    content: 'Internship offer & completion certificate/letter.',
  },
  {
    content: 'Open source software development experience.',
  },
  {
    content: 'Technical Mentorship & guidance from product maintainers.',
  },
  {
    content: 'Written Letter & LinkedIn recommendation.',
  },
  {
    content: 'Guidance & Advice writing SOP & M.S Applications.',
  },
  {
    content: 'Invitation to Mentor for RGSOC, GSOC, GCI etc.',
  },
];
