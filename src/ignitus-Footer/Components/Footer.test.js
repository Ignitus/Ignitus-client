import React from 'react';
import { shallow } from 'enzyme';
import logo from '../../ignitus-Assets/Images/Logos/black_logo.png';
import Foo from './Footer';

describe('Footer', () => {
  test('should see 5 columns in the footer', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders an image logo', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper).toMatchSnapshot();
  });
});
