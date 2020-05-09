import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerialize, { matchers } from 'jest-emotion';
import { SearchBar, Avatar } from '../styles';

import { SecondaryDropDown } from './index';
import { Heading5 } from '../../typography';

expect.addSnapshotSerializer(emotionSerialize);
expect.extend(matchers);

const props = {
  data: [
    {
      avatar: 'Custom',
      name: 'John',
    },
    {
      avatar: 'Primary',
      name: 'Henry',
    },
    {
      avatar: 'Secondary',
      name: 'Parker',
    },
    {
      avatar: 'Secondary',
      name: 'Helen',
    },
    {
      avatar: 'Custom',
      name: 'Don Joshua',
    },
  ],
};

const input = 'input[type="text"]';
let wrapper;

beforeEach(() => {
  wrapper = mount(<SecondaryDropDown {...props} />);
});

describe('<SecondaryDropDown />', () => {
  it('should rendered', () => {
    wrapper = render(<SecondaryDropDown {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render input tags', () => {
    expect(wrapper.find(input).length).toBe(1);
  });

  it('should render correct values when searched', () => {
    wrapper.find(SearchBar).simulate('change', { target: { value: 'helen' } });
    expect(wrapper.find(Heading5).length).toEqual(1);
    expect(wrapper.find(Avatar).length).toEqual(1);

    wrapper.find(SearchBar).simulate('change', { target: { value: 'he' } });
    expect(wrapper.find(Heading5).length).toEqual(2);
    expect(wrapper.find(Avatar).length).toEqual(2);

    wrapper.find(SearchBar).simulate('change', { target: { value: 'jo' } });
    expect(wrapper.find(Heading5).length).toEqual(2);
    expect(wrapper.find(Avatar).length).toEqual(2);

    wrapper
      .find(SearchBar)
      .simulate('change', { target: { value: 'parker peter' } });
    expect(wrapper.find(Heading5).length).toEqual(0);
    expect(wrapper.find(Avatar).length).toEqual(0);

    wrapper.find(SearchBar).simulate('change', { target: { value: ' ' } });
    expect(wrapper.find(Heading5).length).toEqual(5);
    expect(wrapper.find(Avatar).length).toEqual(5);
  });
});
