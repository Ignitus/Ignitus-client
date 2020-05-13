import React from 'react';
import { mount, render } from 'enzyme';
import styled from '@emotion/styled';
import serializer, { matchers } from 'jest-emotion';

import { GreyLight } from '../../../../index';

import { CommonLayer } from './Layer';
import { Layer } from './styles';

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);

let wrapper;

describe('<Layer />', () => {
  it('should render', () => {
    wrapper = render(<CommonLayer text="Text" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with default border-bottom style', () => {
    wrapper = mount(<CommonLayer text="Text" />);
    expect(wrapper.find(Layer)).toHaveStyleRule(
      'border-bottom',
      `1px solid ${GreyLight}`,
    );
  });

  it('should render correct styles given in props', () => {
    wrapper = mount(<CommonLayer text="Text" marginTop marginBottom />);
    const margin = '0.5rem';
    expect(wrapper).toHaveStyleRule('margin-top', margin);
    expect(wrapper).toHaveStyleRule('margin-bottom', margin);
  });

  it('should update style using emotion styled', () => {
    const StyledLayer = styled(CommonLayer)`
      background-color: red;
    `;
    wrapper = mount(<StyledLayer text="Text" />);
    expect(wrapper).toHaveStyleRule('background-color', 'red');
  });

  it('should render text in Paragraph', () => {
    const text = 'Text';
    wrapper = mount(<CommonLayer text={text} />);
    expect(wrapper.find('p').text()).toBe(text);
  });

  it('should render appended & prepended React Node passed in props', () => {
    const append = <h1>Appended Heading</h1>;
    const prepend = <h1>Prepended Heading</h1>;
    wrapper = mount(
      <CommonLayer text="Hello" append={append} prepend={prepend} />,
    );

    // .find(Layer).children() => <div>
    // .find(Layer).children().children() => Children of Layer
    const LayerChild = wrapper
      .find(Layer)
      .children()
      .children();
    expect(LayerChild.length).toBe(3); // Including Text paragraph

    expect(LayerChild.at(0).equals(prepend)).toBeTruthy();
    expect(LayerChild.at(2).equals(append)).toBeTruthy();
  });
});
