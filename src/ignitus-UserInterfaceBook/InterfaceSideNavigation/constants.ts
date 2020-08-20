import { Edges } from './types';
// Not developed routes are commented out but collected them for reference

export const allEdges: Edges[] = [
  {
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
        title: 'Tags',
        route: '/interface/tags',
      },
      {
        title: 'Separator',
        route: '/interface/seperators',
      },
      {
        title: 'Input Fields',
        children: [
          {
            title: 'Search',
            route: '/interface/searchInput',
          },
          {
            title: 'Primary',
            route: '/interface/primaryInput',
          },
          // {
          //   title: 'TextArea',
          //   route: '/interface/textArea',
          // },
          {
            title: 'Icon Input',
            route: '/interface/defaultIconInput',
          },
          {
            title: 'Multi Media',
            route: '/interface/defaultMultiMediaInput',
          },
        ],
      },
      {
        title: 'Selection Controls',
        children: [
          {
            title: 'Checkboxes',
            route: '/interface/defaultCheckbox',
          },
          // {
          //   title: 'Radio Buttons',
          //   route: '/interface/radioButtons',
          // },
          // {
          //   title: 'Toggles',
          //   route: '/interface/toggles',
          // },
        ],
      },
      // {
      //   title: 'Tooltips',
      //   route: '/interface/tooltips',
      // },
      {
        title: 'Dropdowns',
        children: [
          {
            title: 'Default',
            route: '/interface/defaultDropdown',
          },
          {
            title: 'Secondary',
            route: '/interface/secondaryDropdown',
          },
          {
            title: 'Dashboard Navigation',
            route: '/interface/dashboardNavigationDropdown',
          },
        ],
      },
      {
        title: 'Loader',
        route: '/interface/loader',
      },
    ],
  },
  {
    title: 'Molecules',
    children: [
      // {
      //   title: 'Chips',
      //   route: '/interface/chips',
      // },
      // {
      //   title: 'Progress indicators',
      //   route: '/interface/progressBars',
      // },
      // {
      //   title: 'Input with Buttons',
      //   route: '/interface/inputButtons',
      // },
      // {
      //   title: 'Banners',
      //   route: '/interface/banner',
      // },
      {
        title: 'Modal',
        children: [
          {
            title: 'Modal Hooray',
            route: '/interface/modalHooray',
          },
          {
            title: 'Modal Share',
            route: '/interface/modalShare',
          },
          {
            title: 'Modal Apply',
            route: '/interface/modalApply',
          },
        ],
      },
      {
        title: 'Overlay',
        children: [
          {
            title: 'Overlay',
            route: '/interface/overlay',
          },
        ],
      },
      {
        title: 'Scroll Bar',
        route: '/interface/scrollBar',
      },
      {
        title: 'Toggle Buttons',
        route: '/interface/toggleButtons',
      },
    ],
  },
  {
    title: 'Organisms',
    children: [
      {
        title: 'Side Navigation',
        children: [
          {
            title: 'Dashboard',
            route: '/interface/dashboardNavigation',
          },
          {
            title: 'Settings',
            route: '/interface/sideNavigation',
          },
        ],
      },
      // {
      //   title: 'Navigation Drawer',
      //   route: '/interface/topNavigation',
      // },
      {
        title: 'Footer',
        children: [
          {
            title: 'Dashboard',
            route: '/interface/dashBoardFooter',
          },
          // {
          //   title: 'Default',
          //   route: '/interface/defaultFooter',
          // },
        ],
      },
      {
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
          {
            title: 'Side Profile',
            route: '/interface/sideProfile',
          },
          {
            title: 'Message Card',
            route: '/interface/messageCard',
          },
          {
            title: 'Opportunity Side Card',
            route: '/interface/opportunitySideCard',
          },
        ],
      },
      {
        title: 'Random Avatar',
        route: '/interface/avatar',
      },
      {
        title: 'Notifications',
        route: '/interface/notifications',
      },
    ],
  },
  {
    title: 'Templates',
    children: [
      // {
      //   title: 'Forms',
      //   route: '/interface/forms',
      // },
      {
        title: 'Filters',
        route: '/interface/filters',
      },
      {
        title: 'Signup Progress',
        route: '/interface/progress',
      },
      // {
      //   title: 'Profile Side Section',
      //   route: '/interface/profileSideSection',
      // },
      // {
      //   title: 'Authentication Forms',
      //   route: '/interface/authForms',
      // },
      // {
      //   title: 'Post Layouts',
      //   route: '/interface/postLayout',
      // },
    ],
  },
  {
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
];
