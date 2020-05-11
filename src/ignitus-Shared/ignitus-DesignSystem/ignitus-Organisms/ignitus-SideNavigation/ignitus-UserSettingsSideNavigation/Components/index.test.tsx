import React from 'react';
import { mount, render } from 'enzyme';

import UserSettingsSideNavigation, { Layer } from './index';

let wrapper;
beforeEach(() => {
  wrapper = mount(<UserSettingsSideNavigation />);
});

describe('<DefaultButtonWithIcon />', () => {
  it('should rendered', () => {
    const tree = render(<UserSettingsSideNavigation />);
    expect(tree).toMatchSnapshot();
  });

  it('should rendered all layers', () => {
    expect(wrapper.find(Layer).length).toEqual(6);
  });
});
