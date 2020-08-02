import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerialize, { matchers } from 'jest-emotion';

import { DefaultDropdown } from '.';

expect.addSnapshotSerializer(emotionSerialize);
expect.extend(matchers);

const props = {
  options: ['option1', 'option2', 'option3', 'option4'],
  label: 'options',
  display: 'block',
};

it('should rendered', () => {
  const tree = render(<DefaultDropdown {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<DefaultDropdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DefaultDropdown {...props} />);
  });

  it('should render label, select & option tags', () => {
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(props.options.length);
  });

  it('should render select with passed display option', () => {
    expect(wrapper.find('select')).toHaveStyleRule('display', props.display);

    wrapper = mount(<DefaultDropdown {...{ ...props, display: 'inline' }} />);
    expect(wrapper.find('select')).toHaveStyleRule('display', 'inline');
  });
});
