import React from 'react';
import {shallow} from 'enzyme';

import {Progress} from './Progress';
import {Circle, Line} from '../styles';

describe('<Progress />', () => {
  it('renders appropriate Circle and Lines', () => {
    const wrapper = shallow(<Progress steps={3} />);

    expect(wrapper.find(Circle).length).toBe(3);
    expect(wrapper.find(Line).length).toBe(2);
  });

  it('should contains correct Circle currently active', () => {
    let wrapper = shallow(<Progress steps={5} current={3} />);
    expect(wrapper.find(Circle).at(2).props()['current']).toBeTruthy();

    // ALL OTHER Circle should not have current=true
    wrapper.find(Circle).forEach((circle, i) => {
      if (i !== 2) expect(circle.props()['current']).toBeFalsy();
    });

    wrapper = shallow(<Progress steps={5} current={5} />);
    expect(wrapper.find(Circle).at(4).props()['current']).toBeTruthy();
  });
});
