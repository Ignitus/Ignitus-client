import React from 'react';
import { mount, render } from 'enzyme';

import DashboardNavigation, { Layer } from './index';
import { Paragraph } from '../../../../ignitus-Atoms/typography';
import { SideNavIcon } from '../style';

let wrapper;
beforeEach(() => {
  wrapper = mount(<DashboardNavigation />);
});

describe('<DefaultButtonWithIcon />', () => {
  it('should rendered', () => {
    const tree = render(<DashboardNavigation />);
    expect(tree).toMatchSnapshot();
  });

  it('should rendered all paragraphs', () => {
    expect(wrapper.find(Paragraph).length).toEqual(6);
  });

  it('should rendered all icons', () => {
    expect(wrapper.find(SideNavIcon).length).toEqual(6);
  });

  it('should rendered all layers', () => {
    expect(wrapper.find(Layer).length).toEqual(6);
  });
});
