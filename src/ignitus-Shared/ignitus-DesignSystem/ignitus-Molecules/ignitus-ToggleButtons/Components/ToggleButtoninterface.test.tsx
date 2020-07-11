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
  handleClick: jest.fn(),
};

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should render', () => {
  const tree = render(<ToggleButtonInterface {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<ToggleButtonInterface />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ToggleButtonInterface {...props} />);
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

  it('should simulate both side Clicks', () => {
    wrapper.find(ButtonLeft).simulate('click');
    expect(props.handleClick).toHaveBeenCalledWith('left');
    wrapper.find(ButtonRight).simulate('click');
    expect(props.handleClick).toHaveBeenCalledWith('right');
  });

  it('should toggle Button categories on click', () => {
    wrapper.find(ButtonLeft).simulate('click');
    expect(wrapper.find(ButtonLeft).prop('category')).toBe(
      props.activeCategory,
    );
    expect(wrapper.find(ButtonRight).prop('category')).toBe(
      props.inActiveCategory,
    );

    wrapper.find(ButtonRight).simulate('click');
    expect(wrapper.find(ButtonRight).prop('category')).toBe(
      props.activeCategory,
    );
    expect(wrapper.find(ButtonLeft).prop('category')).toBe(
      props.inActiveCategory,
    );
  });
});
