import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { Notifications } from './index';
import * as S from '../styles';
import { InputTypes } from '../types';
import * as C from '../../../ignitus-Atoms/colors';

const props: InputTypes = {
  textColor: `${C.Black}`,
  titleColor: `${C.IgnitusBlue}`,
  bgColor: `${C.White}`,
  picture:
    'https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png',
  title: '3 mentors',
  textLeft: 'We found',
  textRight: 'that could help you with your journey',
};

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should rendered', () => {
  const tree = render(<Notifications {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<Notifications />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Notifications {...props} />);
  });

  it('should render TextColor, BgColor', () => {
    expect(wrapper.find(S.Container).prop('color')).toBe(props.textColor);
    expect(wrapper.find(S.Container).prop('bgColor')).toBe(props.bgColor);
  });

  it('should render Image, CrossIcon', () => {
    expect(wrapper.find(S.Image).length).toBe(1);
    expect(wrapper.find(S.Image).prop('src')).toBe(props.picture);
    expect(wrapper.find(S.Icon).length).toBe(1);
  });

  it('should render Text with correct color', () => {
    const value = `\u00A0 ${props.title} \u00A0`;
    expect(wrapper.find(S.Text).text()).toBe(value);
    expect(wrapper.find(S.Text).prop('color')).toBe(props.titleColor);
  });

  it('should render TextLeft, TextRight', () => {
    const value = `\u00A0 ${props.title} \u00A0`;
    expect(wrapper.find(S.LeftContainer).text()).toBe(
      props.textLeft + value + props.textRight,
    );
  });
});
