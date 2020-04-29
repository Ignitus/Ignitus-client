import React from 'react';
import { mount, render } from 'enzyme';

import DefaultCheckbox from './defaultCheckbox';

const props = {
  label: 'Label',
  value: 'Value',
};

let wrapper;
beforeEach(() => {
  wrapper = mount(<DefaultCheckbox {...props} />);
});

describe('<DefaultCheckbox />', () => {
  it('should render', () => {
    wrapper = render(<DefaultCheckbox {...props} />);
    expect(wrapper).toMatchSnapshot();
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
