import {Edges} from './types';

export const atomsEdges: any[] = [
  {
    node: {
      title: 'Atoms',
      children: [
        {
          title: 'Colors',
          route: '/interface/colors',
        },
        {
          title: 'Icons',
          route: '/interface/icons',
        },
        {
          title: 'Typography',
          route: '/interface/typography',
        },
        {
          title: 'Input Fields',
          route: '/interface/inputFields',
        },
        {
          title: 'Checkboxes',
          route: '/interface/checkboxes',
        },
        {
          title: 'Radio Buttons',
          route: '/interface/radioButtons',
        },
        {
          title: 'Dropdowns',
          route: '/interface/dropdowns',
          children: [{
            node: {
              title: 'DropDowns',
              children: [
                {
                  title: 'Default Dropdowns',
                  route: '/interface/dropdowns',
                },
                {
                  title: 'Secondary Dropdowns',
                  route: '/interface/dropdowns',
                },
              ],
            },
          }],
        },
        {
          title: 'Card',
          route: '/interface/cards',
        },
        {
          title: 'Tags',
          route: '/interface/tags',
        },
        {
          title: 'Separator',
          route: '/interface/seperators',
        },
        {
          title: 'Progress bar',
          route: '/interface/progressBars',
        },
        {
          title: 'Buttons',
          route: '/interface/buttons',
        },
        {
          title: 'Toggles',
          route: '/interface/toggles',
        },
        {
          title: 'Text Links',
          route: '/interface/textLink',
        },
      ],
    },
  },
];

export const moleculesEdges = [
  {
    node: {
      title: 'Molecules',
      children: [
        {
          title: 'Input with Buttons',
          route: '/interface/inputButtons',
        },
        {
          title: 'Overlay',
          route: '/interface/overlay',
        },
      ],
    },
  },
];

export const organismsEdges = [
  {
    node: {
      title: 'Organisms',
      children: [
        {
          title: 'Navigation',
          route: '/interface/checkboxes',
        },
        {
          title: 'Side Navigation',
          route: '/interface/sideNavigation',
        },
        {
          title: 'Footer',
          route: '/interface/footer',
        },
        {
          title: 'Card Layouts',
          route: '/interface/cardLayout',
        },
      ],
    },
  },
];

export const templatesEdges = [
  {
    node: {
      title: 'Templates',
      children: [
        {
          title: 'Forms',
          route: '/interface/forms',
        },
        {
          title: 'Filters',
          route: '/interface/filters',
        },
        {
          title: 'Profile Side Section',
          route: '/interface/profileSideSection',
        },
        {
          title: 'Authentication Forms',
          route: '/interface/authForms',
        },
        {
          title: 'Post Layouts',
          route: '/interface/postLayout',
        },
      ],
    },
  },
];

export const layoutEdges = [
  {
    node: {
      title: 'Layouts',
      children: [
        {
          title: 'Not Found',
          route: '/interface/notFound',
        },
        {
          title: 'Under Construction',
          route: '/interface/underConstruction',
        },
      ],
    },
  },
];
