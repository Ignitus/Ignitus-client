import React from 'react';
import { mount, render } from 'enzyme';

import { Loader } from './index';
import * as I from '../styles';

it('should render', () => {
  const tree = render(<Loader />);
  expect(tree).toMatchSnapshot();
});

describe('<Loader />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Loader />);
  });

  it('should render Spinner once', () => {
    expect(wrapper.find(I.Spinner).length).toBe(1);
  });

  it('should render Logo once', () => {
    expect(wrapper.find(I.Logo).length).toBe(1);
  });
});
