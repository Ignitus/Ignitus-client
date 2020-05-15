import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';

import { ToggleButtonInterface } from './ToggleButtoninterface';
import { ToggleButtonInterfaceProps } from '../types';
import { ButtonLeft, ButtonRight } from '../styles';

const props: ToggleButtonInterfaceProps = {
  activeCategory: 'primary',
  inActiveCategory: 'grey',
  children: {
    leftButtonContent: <> Left </>,
    rightButtonContent: <> Right </>,
  },
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<ToggleButtonInterface />', () => {
  beforeEach(() => {
    wrapper = mount(<ToggleButtonInterface {...props} />);
  });

  it('should render', () => {
    wrapper = render(<ToggleButtonInterface {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render buttons with correct categories', () => {
    expect(wrapper.find(ButtonLeft).prop('category')).toBe(
      props.activeCategory,
    );
    expect(wrapper.find(ButtonRight).prop('category')).toBe(
      props.inActiveCategory,
    );
  });

  it('should render buttons with correct content', () => {
    expect(wrapper.find(ButtonLeft).prop('children')).toBe(
      props.children.leftButtonContent,
    );
    expect(wrapper.find(ButtonRight).prop('children')).toBe(
      props.children.rightButtonContent,
    );
  });
});
