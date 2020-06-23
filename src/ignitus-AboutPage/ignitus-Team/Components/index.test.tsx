import React from 'react';
import { render, mount } from 'enzyme';
import { Team } from './index';
import { GitHubDataType } from '../types';

React.useLayoutEffect = React.useEffect;
/*eslint-disable*/ 
const octocatGithubData: GitHubDataType = {
  login: 'octocat',
  id: 1,
  node_id: 'MDQ6VXNlcjE=',
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  contributions: 1000,
  user_id: 1234,
};
/* eslint-enable */

let wrapper;
const props: any = {
  getContributorsData() {
    return [];
  },
  contributorsData: {
    presets: [octocatGithubData],
    isFetching: false,
  },
};
beforeEach(() => {
  wrapper = mount(<Team {...props} />);
});

describe('<Team />', () => {
  it('should be rendered', () => {
    const tree = render(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('should render correct title', () => {
    expect(wrapper.find('h2').text()).toBe('Plus Icon1 Contributors');
  });

  it('shoud render contributors data correctly', () => {
    expect(wrapper.find('PureTeam').length).toBe(1);
    expect(
      wrapper
        .find('PureTeam')
        .at(0)
        .props('contributors') === octocatGithubData,
    );
  });
});
