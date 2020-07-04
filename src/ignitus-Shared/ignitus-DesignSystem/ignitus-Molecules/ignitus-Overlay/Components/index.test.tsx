import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { Overlay } from './index';
import * as O from '../styles';
import { Paragraph } from '../../../..';

const props = {
  primaryText: 'primary text',
  secondaryText: 'secondary text',
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<Overlay />', () => {
  beforeEach(() => {
    wrapper = mount(<Overlay {...props} />);
  });

  it('should render', () => {
    wrapper = render(<Overlay {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render logo, heading, paragraph', () => {
    expect(wrapper.find(O.Logo).length).toBe(1);
    expect(wrapper.find(O.Heading).length).toBe(1);
    expect(wrapper.find(Paragraph).length).toBe(1);
  });

  it('should render heading, paragraph as passed in props', () => {
    expect(wrapper.find(O.Heading).text()).toBe(props.primaryText);
    expect(wrapper.find(Paragraph).text()).toBe(props.secondaryText);
  });
});
