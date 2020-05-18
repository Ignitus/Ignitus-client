import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer from 'jest-emotion';
import { Notfound } from './index';
import * as S from '../style';

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);

describe('<Notfound />', () => {
  beforeEach(() => {
    wrapper = mount(<Notfound />);
  });

  it('should render', () => {
    wrapper = render(<Notfound />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Eyes, Message, Button, AnimationText components', () => {
    expect(wrapper.find(S.Eyes).length).toBe(2);
    expect(wrapper.find(S.Message).length).toBe(1);
    expect(wrapper.find(S.StyledButton).length).toBe(1);
    expect(wrapper.find(S.AnimationText).length).toBe(1);
  });
});
