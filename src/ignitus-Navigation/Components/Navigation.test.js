import React from 'react';
import { shallow } from 'enzyme';
import logo from '../../ignitus-Assets/Images/Logos/black_logo.png';
import '../Styles/style.css';
import Foo from './Navigation';

describe('Navigation', () => {
	test('renders an image logo', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });
});
 