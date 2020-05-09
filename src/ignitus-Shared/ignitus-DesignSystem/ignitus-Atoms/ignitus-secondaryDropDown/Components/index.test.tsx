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
      name: 'Helen',
    },
    {
      avatar: 'Secondary',
      name: 'Parker',
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
  });
});
