import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import DashboardFooter from './index';

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<DashboardFooter />', () => {
  beforeEach(() => {
    wrapper = mount(<DashboardFooter />);
  });

  it('should render', () => {
    wrapper = render(<DashboardFooter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ul, li, p tags', () => {
    expect(wrapper.find('ul').length).toBe(2);
    expect(wrapper.find('li').length).toBe(5);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should render 2018 copywright text', () => {
    expect(wrapper.find('p').text()).toEqual('© Ignitus 2018');
  });
});
