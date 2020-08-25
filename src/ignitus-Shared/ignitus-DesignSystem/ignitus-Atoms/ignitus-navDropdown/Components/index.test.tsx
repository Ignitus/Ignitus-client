import React from 'react';
import { mount, render } from 'enzyme';
import { DashboardNavigationDropdown } from './index';

import { Icon } from '../styles';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

const props = {
  Options: [{ title: 'title' }],
  Name: 'name',
};

it('should render', () => {
  const tree = render(<DashboardNavigationDropdown {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<DashboardNavigationDropdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DashboardNavigationDropdown {...props} />);
  });

  it('allows us to set Name props', () => {
    expect(wrapper.props().Name).toEqual('name');
    wrapper.setProps({ Name: 'different name' });
    expect(wrapper.props().Name).toEqual('different name');
  });

  it('allows us to set Options props', () => {
    expect(wrapper.props().Options).toEqual([{ title: 'title' }]);
    wrapper.setProps({
      Options: [{ title: 'second title' }, { title: 'third title' }],
    });
    expect(wrapper.props().Options).toEqual([
      { title: 'second title' },
      { title: 'third title' },
    ]);
  });

  it('should render given icon', () => {
    expect(wrapper.find(Icon).length).toBe(2);
    expect(wrapper.find(AppIcon.StudentIcon).length).toBe(1);
    expect(wrapper.find(AppIcon.FilledArrowDownIcon).length).toBe(1);
  });
});
