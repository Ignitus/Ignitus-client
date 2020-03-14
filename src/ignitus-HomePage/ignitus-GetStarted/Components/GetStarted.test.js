import React from 'react';
import { shallow } from 'enzyme';
import '../Styles/style.scss';
import Foo from './GetStarted';

describe('GetStarted', () => {
  test('Renders Sign Up button', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('.btn-md _button')).toBeDefined();
  });
});
