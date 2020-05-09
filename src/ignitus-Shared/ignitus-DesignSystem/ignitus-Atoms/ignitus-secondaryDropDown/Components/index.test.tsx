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

const searchHelper = (wrapper, searchValue, expectedResults) => {
  wrapper
    .find(SearchBar)
    .simulate('change', { target: { value: `${searchValue}` } });
  for (let i = 0; i < expectedResults.length; i += 1) {
    expect(
      wrapper
        .find(Heading5)
        .at(i)
        .text(),
    ).toEqual(expectedResults[i].name);
  }
  for (let i = 0; i < expectedResults.length; i += 1) {
    expect(
      wrapper
        .find(Avatar)
        .at(i)
        .prop('src'),
    ).toEqual(expectedResults[i].avatar);
  }
};

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
    searchHelper(wrapper, 'helen', [{ name: 'Helen', avatar: 'Secondary' }]);
    searchHelper(wrapper, 'he', [
      { name: 'Henry', avatar: 'Primary' },
      { name: 'Helen', avatar: 'Secondary' },
    ]);
    searchHelper(wrapper, 'jo', [
      { name: 'John', avatar: 'Custom' },
      { name: 'Don Joshua', avatar: 'Custom' },
    ]);
    searchHelper(wrapper, 'parker peter', []);
    searchHelper(wrapper, ' ', [
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
    ]);
  });
});
