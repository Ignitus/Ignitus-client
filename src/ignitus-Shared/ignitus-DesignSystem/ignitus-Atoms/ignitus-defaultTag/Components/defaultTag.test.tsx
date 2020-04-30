import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';

import { DefaultTag1, DefaultTag2 } from './index';
import { InputTypes } from '../types';
import CrossIcon from '../../../ignitus-Assets/ignitus-Icons/crossIcon';

const props: InputTypes = {
  label: 'Label',
  color: '#000',
  background: '#fff',
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

const styleCheck = () => {
  const span = wrapper.find('span');
  expect(span).toHaveStyleRule('color', props.color);
  expect(span).toHaveStyleRule('background', props.background);
};

describe('<DefaultTag1 />', () => {
  beforeEach(() => {
    wrapper = mount(<DefaultTag1 {...props} />);
  });

  it('should render', () => {
    wrapper = render(<DefaultTag1 {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render span tag with label', () => {
    expect(wrapper.find('span').text()).toBe(props.label);
  });

  it('should render span with style passed in prop', styleCheck);
});

describe('<DefaultTag2 />', () => {
  beforeEach(() => {
    wrapper = mount(<DefaultTag2 {...props} />);
  });

  it('should render', () => {
    wrapper = render(<DefaultTag2 {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render span tag with label & CrossIcon', () => {
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find(CrossIcon).length).toBe(1);
  });

  it('should render span with style passed in prop', styleCheck);
});
