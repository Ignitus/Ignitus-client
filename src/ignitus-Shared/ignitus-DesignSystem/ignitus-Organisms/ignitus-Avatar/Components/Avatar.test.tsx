import React from 'react';
import { mount } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { Avatar } from './Avatar';
import { AvatarImage } from '../styles';
import { avatar } from '../types';

const pre = 'https://storage.googleapis.com/ignitus_assets/ig-avatars/';

const avatarNames = ['grant'];

const randomAvatar = () =>
  avatarNames[Math.floor(Math.random() * avatarNames.length)];

const props: avatar = {
  name: randomAvatar(),
  src: `${pre}${randomAvatar()}.png`,
};

console.log('name: ', props.name);

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<Avatar />', () => {
  beforeEach(() => {
    wrapper = mount(<Avatar />);
  });

  it('should render Avatar images', () => {
    expect(wrapper.find(AvatarImage).length).toBe(1);

    wrapper = mount(<AvatarImage {...props} />);

    expect(wrapper.find(AvatarImage).prop('src')).toEqual(props.src);
    expect(wrapper.find(AvatarImage).prop('name')).toEqual(props.name);
  });
});
