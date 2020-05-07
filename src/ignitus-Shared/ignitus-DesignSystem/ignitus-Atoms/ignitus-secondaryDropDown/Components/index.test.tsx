import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerialize, { matchers } from 'jest-emotion';
import { SearchBarWrapper } from '../styles';

import { SecondaryDropDown } from './index';

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

  it('should render input tag with correct search value', () => {
    const searchTerm = 'Helen';
    const component = render(<SearchBarWrapper value={searchTerm} />);

    expect(component[0].attribs.value).toEqual(searchTerm);
    expect(component[0].name).toBe('div');
  });
});
