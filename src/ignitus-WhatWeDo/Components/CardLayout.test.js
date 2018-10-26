import React from 'react';
import { shallow } from 'enzyme';
import CardLayout from './CardLayout';
import Card from './Card';

describe('CardLayout', () => {
  test('should render cards according to data', () => {
    const wrapper = shallow(<CardLayout/>);
    expect(wrapper).toMatchSnapshot();
  });
});
