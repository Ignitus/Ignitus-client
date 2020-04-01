import React, {HTMLAttributes} from 'react';
import TwitterIcon from './twitterIcon/twitterIcon';
import LinkedInIcon from './linkedInIcon/linkedInIcon';
import AngelListIcon from './angelListIcon/angelListIcon';
import ChevronIcon from './chevronIcon/chevronIcon';
import PlusIcon from './plusIcon/plusIcon';
import ApplyIcon from './applyIcon/applyIcon';
import HeartIcon from './heartIcon/heartIcon';
import {AppIcon} from '../../../types/iconsTypes/enums';
import MessageIcon from './messageIcon/messageIcon';
import SaveIcon from './saveIcon/saveIcon';
import NetworkIcon from './networkIcon';
import MentorsIcon from './mentorsIcon/mentorsIcon';
import FileIcon from './fileIcon/fileIcon';
import BookmarkIcon from './bookmarkIcon/bookmarkIcon';
import MapMarkerIcon from './mapMarkerIcon/mapMarkerIcon';
import ChatMessageIcon from './chatMessageIcon/chatMessageIcon';

type Props = {
  name: AppIcon;
} & HTMLAttributes<SVGElement>;

const Icon = ({name, ...rest}: Props) => {
  switch (name) {
    case AppIcon.AngelListIcon:
      return <AngelListIcon {...rest} />;

    case AppIcon.ApplyIcon:
      return <ApplyIcon {...rest} />;

    case AppIcon.Chevron:
      return <ChevronIcon {...rest} />;

    case AppIcon.HeartIcon:
      return <HeartIcon {...rest} />;

    case AppIcon.LinkedInIcon:
      return <LinkedInIcon {...rest} />;

    case AppIcon.PlusIcon:
      return <PlusIcon {...rest} />;

    case AppIcon.TwitterIcon:
      return <TwitterIcon {...rest} />;

    case AppIcon.MessageIcon:
      return <MessageIcon {...rest} />;

    case AppIcon.SaveIcon:
      return <SaveIcon {...rest} />;

    case AppIcon.NetworkIcon:
      return <NetworkIcon {...rest} />;

    case AppIcon.MentorsIcon:
      return <MentorsIcon {...rest} />;

    case AppIcon.FileIcon:
      return <FileIcon {...rest} />;

    case AppIcon.MapMarkerIcon:
      return <MapMarkerIcon {...rest} />;

    case AppIcon.BookmarkIcon:
      return <BookmarkIcon {...rest} />;

    case AppIcon.ChatMessageIcon:
			return <ChatMessageIcon {...rest} />;
  }
};

export default Icon;
