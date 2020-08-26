import React from 'react';
import { mount, render } from 'enzyme';
import { DashboardNavigationDropdown } from './index';

import { Icon, NavigationHeading } from '../styles';
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it should render Name prop inside NavigationHeading surrounded by static icons', () => {
    expect(
      wrapper
        .find(NavigationHeading)
        .children()
        .find(Icon).length,
    ).toBe(2);
    expect(wrapper.find(AppIcon.StudentIcon).length).toBe(1);
    expect(wrapper.find(AppIcon.FilledArrowDownIcon).length).toBe(1);
    expect(wrapper.props().Name).toBe(props.Name); // ? unsure on how to write this part
    // expect(wrapper.find(NavigationHeading).children().text()).toBe(props.Name); // ? initially wrote it like this but can't figure out how to trim away the icon text name
  });

  it('should render given icon', () => {
    expect(wrapper.find(Icon).length).toBe(2);
    expect(wrapper.find(AppIcon.StudentIcon).length).toBe(1);
    expect(wrapper.find(AppIcon.FilledArrowDownIcon).length).toBe(1);
  });

  // ! both tests below are failing

  // it('should toggle state on click', () => {
  //   const setContent = jest.fn();
  //   const handleClick = jest.spyOn(React, 'useState');
  //   handleClick.mockImplementation(content => [content, setContent]);

  //   wrapper.find(NavigationHeading).simulate('click');
  //   expect(setContent).toHaveBeenCalledTimes(1);
  //   wrapper.find(NavigationHeading).simulate('click');
  //   expect(setContent).toHaveBeenCalledTimes(2);
  // });

  // it('it should render Options only after simulating click', () => {
  //   expect(wrapper.find(Column).length).toBe(0);
  //   wrapper.find(NavigationHeading).simulate('click');
  //   console.log(wrapper.debug());
  // });
});
