import React from 'react';
import { mount } from 'enzyme';
import { Avatar } from '.';
import { AvatarImage } from '../styles';
import { avatar, AvatarImageProps } from '../types';
import { avatars } from '../avatars';

const randomAvatar = () => avatars[Math.floor(Math.random() * avatars.length)];
const av: avatar = randomAvatar();
const props: AvatarImageProps = {
  alt: av.name,
  src: av.src,
};
let wrapper;

describe('<Avatar />', () => {
  beforeEach(() => {
    wrapper = mount(<Avatar />);
  });

  it('should render Avatar images', () => {
    expect(wrapper.find(AvatarImage).length).toBe(1);
    wrapper = mount(<AvatarImage {...props} />);
    expect(wrapper.find(AvatarImage).prop('src')).toEqual(props.src);
    expect(wrapper.find(AvatarImage).prop('alt')).toEqual(props.alt);
  });
});
