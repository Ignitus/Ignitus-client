import React from 'react';
import { shallow } from 'enzyme';
import logo from '../../Images/Logos/black_logo.png';
import Foo from './Footer';

describe('Footer', () => {
  test('should see 5 columns in the footer', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('.col-md-2')).toHaveLength(5)
  });

  test('renders an image logo', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find("img").prop("src")).toEqual(logo);
  })
})