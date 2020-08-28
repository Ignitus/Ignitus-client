import React from 'react';
import { mount, render } from 'enzyme';
import { DashboardNavigationDropdown } from './index';
import { Icon, NavigationHeading, Column } from '../styles';
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
    const NavHeadingIcons = [AppIcon.StudentIcon, AppIcon.FilledArrowDownIcon];
    expect(
      wrapper
        .find(NavigationHeading)
        .children()
        .find(Icon).length,
    ).toBe(2);
    expect(wrapper.find(NavHeadingIcons[0]).length).toBe(1);
    expect(wrapper.find(NavHeadingIcons[1]).length).toBe(1);
    const RenderedNavHeadingIcons = [
      wrapper
        .find(NavigationHeading)
        .find(Icon)
        .at(0)
        .props().name,
      wrapper
        .find(NavigationHeading)
        .find(Icon)
        .at(1)
        .props().name,
    ];
    expect(RenderedNavHeadingIcons[0]).toBe(NavHeadingIcons[0]);
    expect(RenderedNavHeadingIcons[1]).toBe(NavHeadingIcons[1]);
    const NavigationHeadingTextWithIconNames = wrapper
      .find(NavigationHeading)
      .text() as string;

    // + 1 in slice is done due to wrapper rendering 'Student Icon' instead of 'StudentIcon'
    const NavigationHeadingText = NavigationHeadingTextWithIconNames.slice(
      RenderedNavHeadingIcons[0].length + 1,
    ).slice(0, -RenderedNavHeadingIcons[1].length);
    expect(NavigationHeadingText).toBe(props.Name);
  });

  it('it should render Options only after simulating click', () => {
    expect(wrapper.find(Column).length).toBe(0);
    wrapper.find(NavigationHeading).simulate('click');
    expect(wrapper.find(Column).length).toBe(props.Options.length);

    props.Options.forEach((option, index) => {
      expect(
        wrapper
          .find(Column)
          .at(index)
          .text()
          .trim(),
      ).toBe(option.title);
    });
  });

  it('should render given icon', () => {
    expect(wrapper.find(Icon).length).toBe(2);
    expect(wrapper.find(AppIcon.StudentIcon).length).toBe(1);
    expect(wrapper.find(AppIcon.FilledArrowDownIcon).length).toBe(1);
  });
});
