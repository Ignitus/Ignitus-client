import React, { HTMLAttributes } from 'react';
import { avatars } from '../avatars';
import { AvatarImage } from '../styles';
import { avatar } from '../types';

const randomAvatar = () => avatars[Math.floor(Math.random() * avatars.length)];

export const Avatar: React.FC<HTMLAttributes<HTMLImageElement>> = ({
  ...rest
}) => {
  const av: avatar = randomAvatar();
  return <AvatarImage src={av.src} alt={av.name} {...rest} />;
};
