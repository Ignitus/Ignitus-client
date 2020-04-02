import { Edges } from './types';

export const edges: Edges[] = [
  {
    title: 'Atoms',
    children: [
      {
        title: 'Color Palette',
        route: '/interface/colors'
      },
      {
        title: 'Iconography',
        route: '/interface/icons'
      },
      {
        title: 'Typography',
        route: '/interface/typography'
      },
      {
        title: 'Buttons',
        route: '/interface/buttons'
      },
      {
        title: 'Card',
        route: '/interface/buttons'
      },
      {
        title: 'Separator',
        route: '/interface/seperators'
      },
      {
        title: 'Input Fields',
        children: [
          {
            title: 'Search',
            route: '/interface/searchInput'
          },
          {
            title: 'Primary',
            route: '/interface/primaryInput'
          },
          {
            title: 'TextArea',
            route: '/interface/textArea'
          }
        ]
      },
      {
        title: 'Selection Controls',
        children: [
          {
            title: 'Checkboxes',
            route: '/interface/checkboxes'
          },
          {
            title: 'Radio Buttons',
            route: '/interface/radioButtons'
          },
          {
            title: 'Toggles',
            route: '/interface/toggles'
          },
          {
            title: 'Any',
            children: [
              {
                title: 'First',
                route: '/interface/toggles'
              },
              {
                title: 'Second',
                children: [
                  {
                    title: 'Third',
                    children: [
                      {
                        title: 'Fourth',
                        children: [
                          {
                            title: 'Fifth',
                            route: '/hello'
                          },
                          {
                            title: 'Sixth',
                            route: '/bye'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Tooltips',
        route: '/interface/tooltips'
      },
      {
        title: 'Dropdowns',
        children: [
          {
            title: 'Default',
            route: '/interface/defaultDropdown'
          },
          {
            title: 'Secondary',
            route: '/interface/secondaryDropdown'
          }
        ]
      }
    ]
  },
  {
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
    ]
  },
  {
    title: 'Organisms',
    children: [
      {
        title: 'Navigation Drawer',
        route: '/interface/checkboxes'
      },
      {
        title: 'Side Navigation Drawer',
        children: [
          {
            title: 'Dashboard',
            route: '/interface/defaultDropdown'
          },
          {
            title: 'Settings',
            route: '/interface/sideNavigation'
          }
        ]
      },
      {
        title: 'Footer',
        route: '/interface/footer'
      },
      {
        title: 'Card Layouts',
        children: [
          {
            title: 'Opportunity',
            route: '/interface/opportunityPosted'
          },
          {
            title: 'Saved Opportunity',
            route: '/interface/opportunitySaved'
          },
          {
            title: 'User Profile',
            route: '/interface/userProfile'
          }
        ]
      }
    ]
  },
  {
    title: 'Templates',
    children: [
      {
        title: 'Forms',
        route: '/interface/forms'
      },
      {
        title: 'Filters',
        route: '/interface/filters'
      },
      {
        title: 'Profile Side Section',
        route: '/interface/profileSideSection'
      },
      {
        title: 'Authentication Forms',
        route: '/interface/authForms'
      },
      {
        title: 'Post Layouts',
        route: '/interface/postLayout'
      }
    ]
  },
  {
    title: 'Layouts',
    children: [
      {
        title: 'Not Found',
        route: '/interface/notFound'
      },
      {
        title: 'Under Construction',
        route: '/interface/underConstruction'
      },
      {
        title: 'Opportunities Saved',
        route: '/interface/opportunitiesSaved'
      }
    ]
  }
];
