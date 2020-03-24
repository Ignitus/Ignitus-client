import { Edges } from './types';

export const edges: Edges[] = [
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
          route: '/interface/defaultCheckbox',
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
                  route: '/interface/defaultDropdown',
                },
                {
                  title: 'X Dropdowns',
                  route: '/interface/secondaryDropdown',
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
          children: [{
            node: {
              title: 'Navigation',
              children: [
                {
                  title: 'Dashboard',
                  route: '/interface/defaultDropdown',
                },
                {
                  title: 'Settings',
                  route: '/interface/sideNavigation',
                },
              ],
            },
          }],
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
