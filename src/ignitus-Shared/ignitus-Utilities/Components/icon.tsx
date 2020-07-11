import React, { HTMLAttributes } from 'react';
import { TwitterIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/twitterIcon';
import { LinkedInIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/linkedInIcon';
import { AngelListIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/angelListIcon';
import { PlusIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/plusIcon';
import { ApplyIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/applyIcon';
import { HeartIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/heartIcon';

import { MessageIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/messageIcon';
import { SaveIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/saveIcon';
import { NetworkIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/networkIcon';
import { MentorsIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/mentorsIcon';
import { KeyBoardArrowDown } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/keyBoardArrowDown';
import { KeyBoardArrowRight } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/keyBoardArrowRight';
import { IgnitusFullLogo } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/ignitusFullLogo';
import { CreateIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/createIcon';
import { QuestionAnswerIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/questionAnswerIcon';
import { AccountCircleIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/accountCircleIcon';
import { NotificationIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/notificationIcon';
import { GithubIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/githubIcon';
import { FacebookIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/facebookIcon';
import { GooglePlusIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/googlePlusIcon';
import { InfoIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/infoIcon';
import { PdfIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/pdfIcon';
import { LibraryBooksIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/libraryBooksIcon';
import { LocalLibraryIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/localLibraryIcon';
import { GraduationCapIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/graduationCapIcon';
import { CrossIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/crossIcon';
import { LocationIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/locationIcon';
import { FilledArrowDownIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/filledArrowDownIcon';
import { BookmarkIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/bookmarkIcon';
import { FileIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/fileIcon';
import { MapMarkerIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/mapMarkerIcon';
import { CopyIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/copyIcon';
import { PollIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/pollIcon';
import { VideoLibraryIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/videoLibraryIcon';
import { CameraIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/cameraIcon';
import { IgnitusLogo } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/ignitusLogo/index';
import { EyeVisibleOffIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/eyeVisibleOffIcon/index';
import { EyeVisibleOnIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/eyeVisibleOnIcon/index';
import { AppIcon } from '../../types/iconsTypes/iconEnums';
import { KeyIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/keyIcon/index';
import { SlackIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/slackIcon/index';
import { MediumIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/mediumIcon/index';
import { YouTubeIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/youTubeIcon/index';
import { ContributionIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/conributionIcon';
import { StarCircleIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/starCircleIcon';
import { BarsIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/barsIcon';
import { GridIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/gridIcon';
import { SearchIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/SearchIcon/index';
import { StudentIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/studentIcon/index';
import { ProfessorIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/professorIcon/index';
import { LikeIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/likeIcon/index';
import { SavePlusIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/savePlusIcon/index';
import { ShareIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/shareIcon/index';
import { RemoteJobIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/remoteJobIcon/index';
import { RedditIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/redditIcon/index';
import { CheckIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/checkIcon/index';
import { FilledMessageIcon } from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/filledMessageIcon';

type Props = {
  name: AppIcon;
} & HTMLAttributes<SVGElement>;

export const Icon = ({ name, ...rest }: Props) => {
  switch (name) {
    case AppIcon.AngelListIcon:
      return <AngelListIcon {...rest} />;

    case AppIcon.ApplyIcon:
      return <ApplyIcon {...rest} />;

    case AppIcon.HeartIcon:
      return <HeartIcon {...rest} />;

    case AppIcon.LinkedInIcon:
      return <LinkedInIcon {...rest} />;

    case AppIcon.PlusIcon:
      return <PlusIcon {...rest} />;

    case AppIcon.TwitterIcon:
      return <TwitterIcon {...rest} />;

    case AppIcon.LocationIcon:
      return <LocationIcon {...rest} />;

    case AppIcon.FilledArrowDownIcon:
      return <FilledArrowDownIcon {...rest} />;

    case AppIcon.CrossIcon:
      return <CrossIcon {...rest} />;

    case AppIcon.CheckIcon:
      return <CheckIcon {...rest} />;

    case AppIcon.SearchIcon:
      return <SearchIcon {...rest} />;

    case AppIcon.MessageIcon:
      return <MessageIcon {...rest} />;

    case AppIcon.FilledMessageIcon:
      return <FilledMessageIcon {...rest} />;

    case AppIcon.SaveIcon:
      return <SaveIcon {...rest} />;

    case AppIcon.SavePlusIcon:
      return <SavePlusIcon {...rest} />;

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

    case AppIcon.KeyBoardArrowDown:
      return <KeyBoardArrowDown {...rest} />;

    case AppIcon.KeyBoardArrowRight:
      return <KeyBoardArrowRight {...rest} />;

    case AppIcon.IgnitusFullLogo:
    default:
      return <IgnitusFullLogo {...rest} />;

    case AppIcon.CreateIcon:
      return <CreateIcon {...rest} />;

    case AppIcon.QuestionAnswerIcon:
      return <QuestionAnswerIcon {...rest} />;

    case AppIcon.AccountCircleIcon:
      return <AccountCircleIcon {...rest} />;

    case AppIcon.NotificationIcon:
      return <NotificationIcon {...rest} />;

    case AppIcon.VideoLibIcon:
      return <VideoLibraryIcon {...rest} />;

    case AppIcon.GithubIcon:
      return <GithubIcon {...rest} />;

    case AppIcon.FacebookIcon:
      return <FacebookIcon {...rest} />;

    case AppIcon.RedditIcon:
      return <RedditIcon {...rest} />;

    case AppIcon.GooglePlusIcon:
      return <GooglePlusIcon {...rest} />;

    case AppIcon.InfoIcon:
      return <InfoIcon {...rest} />;

    case AppIcon.PdfIcon:
      return <PdfIcon {...rest} />;

    case AppIcon.PollIcon:
      return <PollIcon {...rest} />;

    case AppIcon.LibraryBooksIcon:
      return <LibraryBooksIcon {...rest} />;

    case AppIcon.LikeIcon:
      return <LikeIcon {...rest} />;

    case AppIcon.LocalLibraryIcon:
      return <LocalLibraryIcon {...rest} />;

    case AppIcon.GraduationCapIcon:
      return <GraduationCapIcon {...rest} />;

    case AppIcon.CopyIcon:
      return <CopyIcon {...rest} />;

    case AppIcon.CameraIcon:
      return <CameraIcon {...rest} />;

    case AppIcon.IgnitusLogo:
      return <IgnitusLogo {...rest} />;

    case AppIcon.EyeVisibleOffIcon:
      return <EyeVisibleOffIcon {...rest} />;

    case AppIcon.EyeVisibleOnIcon:
      return <EyeVisibleOnIcon {...rest} />;

    case AppIcon.KeyIcon:
      return <KeyIcon {...rest} />;

    case AppIcon.SlackIcon:
      return <SlackIcon {...rest} />;

    case AppIcon.ShareIcon:
      return <ShareIcon {...rest} />;

    case AppIcon.MediumIcon:
      return <MediumIcon {...rest} />;

    case AppIcon.YouTubeIcon:
      return <YouTubeIcon {...rest} />;

    case AppIcon.ContributionIcon:
      return <ContributionIcon {...rest} />;

    case AppIcon.StarCircleIcon:
      return <StarCircleIcon {...rest} />;

    case AppIcon.BarsIcon:
      return <BarsIcon {...rest} />;

    case AppIcon.GridIcon:
      return <GridIcon {...rest} />;

    case AppIcon.StudentIcon:
      return <StudentIcon {...rest} />;

    case AppIcon.ProfessorIcon:
      return <ProfessorIcon {...rest} />;

    case AppIcon.RemoteJobIcon:
      return <RemoteJobIcon {...rest} />;
  }
};
