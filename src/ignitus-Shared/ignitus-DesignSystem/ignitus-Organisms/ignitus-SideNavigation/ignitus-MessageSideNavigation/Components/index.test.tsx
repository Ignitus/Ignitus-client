import React from 'react';
import { mount, render } from 'enzyme';

import MessageSideNavigation, { Layer, Notification } from './index';

let wrapper;
beforeEach(() => {
  wrapper = mount(<MessageSideNavigation />);
});

describe('<DefaultButtonWithIcon />', () => {
  it('should rendered', () => {
    const tree = render(<MessageSideNavigation />);
    expect(tree).toMatchSnapshot();
  });

  it('should rendered all layers', () => {
    expect(wrapper.find(Layer).length).toEqual(4);
  });

  it('should rendered all notifications', () => {
    expect(wrapper.find(Notification).length).toEqual(4);
  });

  it('should rendered notification with correct value', () => {
    const size = wrapper.find(Notification).length;
    for (let i = 0; i < size; i += 1)
      expect(
        wrapper
          .find(Notification)
          .at(i)
          .text(),
      ).toEqual('4');
  });
});
