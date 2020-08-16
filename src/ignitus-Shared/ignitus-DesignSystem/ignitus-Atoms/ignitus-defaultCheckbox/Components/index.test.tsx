import React from 'react';
import { mount, render } from 'enzyme';

import { DefaultCheckbox } from './index';

const props = {
  label: 'Label',
  value: 'Value',
};

it('should rendered', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = render(<DefaultCheckbox {...props} />);
  // expect(tree).toMatchSnapshot();
});

describe('<DefaultCheckbox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DefaultCheckbox {...props} />);
  });

  it('should contain checkbox with correct attributes', () => {
    const input = wrapper.find('input[type="checkbox"]');
    expect(input.length).toBe(1);
    expect(input.props().value).toBe(props.value);
    expect(input.props().name).toBe(props.label);
  });

  it('should contain label as a visible UI text', () => {
    expect(wrapper.find('label').props().htmlFor).toBe(props.label);
    expect(wrapper.text()).toBe(props.label);
  });
});
