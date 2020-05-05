import React from 'react';
import { mount, render } from 'enzyme';

import { DefaultSearchInput } from './index';
import { InputTypes } from '../types';
import SearchIcon from '../../../ignitus-Assets/ignitus-Icons/SearchIcon';

const props: InputTypes = {
  type: 'text',
  placeholder: 'Placeholder',
  name: 'Input',
};

const input = 'input[type="text"]';

let wrapper;
beforeEach(() => {
  wrapper = mount(<DefaultSearchInput {...props} />);
});

describe('<DefaultSearchInput />', () => {
  it('should render', () => {
    wrapper = render(<DefaultSearchInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render input with proper props passed', () => {
    const wrapperInputProps = wrapper.find(input).props();
    expect(wrapperInputProps.type).toBe(props.type);
    expect(wrapperInputProps.placeholder).toBe(props.placeholder);
    expect(wrapperInputProps.name).toBe(props.name);
  });

  it('should render input & SearchIcon', () => {
    expect(wrapper.find('input[type="text"]').length).toBe(1);
    expect(wrapper.find(SearchIcon).length).toBe(1);
  });
});
