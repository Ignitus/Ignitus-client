import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import Overlay from './index';

const props = {
  title: 'Title',
  primaryText: 'primary text',
  secondaryText: 'secondary text',
  buttonText: 'button text',
  secondary: true,
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

const styleCheckParagraph = () => {
  const para = wrapper.find('p');
  expect(para).toHaveStyleRule('color', '#4D4D4D');
  expect(para).toHaveStyleRule('font-weight', '500');
  expect(para).toHaveStyleRule('font-size', '18px');
  expect(para).toHaveStyleRule('margin-top', '0');
};

describe('<Overlay />', () => {
  beforeEach(() => {
    wrapper = mount(<Overlay {...props} />);
  });

  it('should render', () => {
    wrapper = render(<Overlay {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render button, h1, p tags', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('p').length).toBe(2);
  });

  it('should render paragraph with style passed in prop', styleCheckParagraph);
});
