import React from 'react';
import { shallow } from 'enzyme';
import Foo from './Footer';
import logo from './Constants';

describe('Footer', () => {
  test('should see 5 columns in the footer', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper).toMatchSnapshot();
  });
});

 