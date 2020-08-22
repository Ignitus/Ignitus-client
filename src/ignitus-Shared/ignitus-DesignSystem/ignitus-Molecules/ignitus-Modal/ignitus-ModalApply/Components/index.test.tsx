import React from 'react';
import { mount, render } from 'enzyme';
import { ModalApply } from './index';

it('should render', () => {
  const tree = render(<ModalApply />);
  expect(tree).toMatchSnapshot();
});

describe('<ModalApply />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ModalApply />);
  });

  it('should render input, span, button and p tags', () => {
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(3);
    expect(wrapper.find('p').length).toBe(3);
  });

  it('should render default p text', () => {
    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).toBe('Email *');
    expect(
      wrapper
        .find('p')
        .at(1)
        .text(),
    ).toBe('Resume *');
    expect(
      wrapper
        .find('p')
        .at(2)
        .text(),
    ).toBe('Cover letter');
  });
});
