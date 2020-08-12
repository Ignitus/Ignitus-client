import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { MessageCard } from './index';

import { Props } from '../types';
import * as S from '../styles';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

const props: Props = {
  name: 'Donald Kunkel',
  position: 'Professor',
  numberMessages: '8 Messages',
  dateSent: 'Thu, 8:23AM',
  avatar: 'https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png',
  online: true,
};

it('should rendered', () => {
  const tree = render(<MessageCard {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<MessageCard />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MessageCard {...props} />);
  });

  it('should render ImageContainer', () => {
    expect(wrapper.find(S.ImageContainer).length).toBe(1);
    expect(wrapper.find('svg').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('img').prop('src')).toBe(props.avatar);
    expect(wrapper.find('circle').length).toBe(1);
  });

  it('should render MessageSubTitle', () => {
    expect(wrapper.find(S.MessageSubTitle).length).toBe(1);
    expect(wrapper.find(S.Sender).text()).toBe(props.name);
    expect(wrapper.find(S.SenderPosition).text()).toBe(props.position);
  });

  it('should render MessageDateTitle', () => {
    expect(wrapper.find(S.MessageDateTitle).length).toBe(1);
    expect(
      wrapper
        .find(S.Details)
        .at(0)
        .text(),
    ).toBe(props.numberMessages);
    expect(
      wrapper
        .find(S.Details)
        .at(1)
        .text(),
    ).toBe(props.dateSent);
  });
});
