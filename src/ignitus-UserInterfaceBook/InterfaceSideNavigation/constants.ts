import { Edges } from './types';

export const edges: Edges[] = [
  {
    node: {
      title: 'Atoms',
      children: [
        {
          title: 'Color Palette',
          route: '/interface/colors',
        },
        {
          title: 'Iconography',
          route: '/interface/icons',
        },
        {
          title: 'Typography',
          route: '/interface/typography',
        },
        {
          title: 'Buttons',
          route: '/interface/buttons',
        },
        {
          title: 'Card',
          route: '/interface/cards',
        },
        {
          title: 'Separator',
          route: '/interface/seperators',
        },

        {
          title: 'Input Fields',
          route: '/interface/inputFields',
          children: [{
            node: {
              title: 'Inputs Fields',
              children: [
                {
                  title: 'Search',
                  route: '/interface/searchInput',
                },
                {
                  title: 'Primary',
                  route: '/interface/primaryInput',
                },
                {
                  title: 'TextArea',
                  route: '/interface/textArea',
                },
              ],
            },
          }],
        },
        {
          title: 'Selection Controls',
          route: '/interface/selectionControls',
          children: [{
            node: {
              title: 'Selection Controls',
              children: [
                {
                  title: 'Checkboxes',
                  route: '/interface/checkboxes',
                },
                {
                  title: 'Radio Buttons',
                  route: '/interface/radioButtons',
                },
                {
                  title: 'Toggles',
                  route: '/interface/toggles',
                },
              ],
            },
          }],
        },
        {
          title: 'Tooltips',
          route: '/interface/tooltips',
        },
        {
          title: 'Dropdowns',
          route: '/interface/dropdowns',
          children: [{
            node: {
              title: 'DropDowns',
              children: [
                {
                  title: 'Default',
                  route: '/interface/defaultDropdown',
                },
                {
                  title: 'Secondary',
                  route: '/interface/secondaryDropdown',
                },
              ],
            },
          }],
        },
      ],
    },
  },
  {
    node: {
      title: 'Molecules',
      children: [
        {
          title: 'Chips',
          route: '/interface/chips',
        },
        {
          title: 'Progress indicators',
          route: '/interface/progressBars',
        },
        {
          title: 'Input with Buttons',
          route: '/interface/inputButtons',
        },
        {
          title: 'Banners',
          route: '/interface/banner',
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
          title: 'Navigation Drawer',
          route: '/interface/checkboxes',
        },
        {
          title: 'Side Navigation Drawer',
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
          route: '',
          children: [{
            node: {
              title: 'Card Layouts',
              children: [
                {
                  title: 'Opportunity',
                  route: '/interface/opportunityPosted',
                },
                {
                  title: 'Saved Opportunity',
                  route: '/interface/opportunitySaved',
                },
                {
                  title: 'User Profile',
                  route: '/interface/userProfile',
                },
              ],
            },
          }],
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
        {
          title: 'Opportunities Saved',
          route: '/interface/opportunitiesSaved',
        },
      ],
    },
  },
];
