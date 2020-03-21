import styled from '@emotion/styled';
import * as T from '../../ignitus-Atoms/atoms';
import * as C from '../../ignitus-Atoms/colors';
import {flexibleColDiv, flexibleRowDiv, TextIconContainer} from '../../shared';
import ChatMessageIcon from '../../ignitus-Assets/ignitus-Icons/chatMessageIcon/chatMessageIcon';
import FileIcon from '../../ignitus-Assets/ignitus-Icons/fileIcon/fileIcon';
import BookmarkIcon from '../../ignitus-Assets/ignitus-Icons/bookmarkIcon/bookmarkIcon';
import MapMarkerIcon from '../../ignitus-Assets/ignitus-Icons/mapMarkerIcon/mapMarkerIcon';

export const ProfileDiv = styled(flexibleColDiv)`
  padding: 2rem;
  margin-top: 100px;
`;

export const ProfileContainer = styled(flexibleRowDiv)`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: ${C.White};
  color: ${C.IgnitusBlue};
  margin: 0.5rem;
  padding: 1rem;
  padding-top: 3px;
  width: 100%;
  flex-wrap: wrap;
`;

export const ProfileTrack = styled.div`
  flex: 1 100%;
  text-align: end;
`;

export const BookmarkIconDiv = styled(TextIconContainer)`
  padding-left: 0;
  padding-right: 2em;
  text-align: right;
  svg {
    left: initial;
    right: 0;
    font-size: 2em;
    top: -5px;
  }
`;

export const ContentDiv = styled(flexibleRowDiv)`
  padding: 0.5rem;
  border: 2px solid blue;
  flex: 1 60%;
  flex-wrap: wrap;
  border: none;
`;

export const ImageContainer = styled(flexibleRowDiv)`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const DetailsContainer = styled.div`
  flex: auto;
  padding: 0.5em 0 0 1.5em;
`;

export const ProfileHeading = styled(T.Heading1)`
  flex: 1;
`;

export const ProfileSubHeading = styled(T.Heading4)`
  flex: 1;
  margin-bottom: 10px;
`;

export const SocialDiv = styled(flexibleColDiv)`
  padding: 0.5rem;
  border: 2px solid blue;
  flex: 1 40%;
  border: none;
`;

export const SocialIcons = styled.div`
  flex: 100%;
  margin: 1em 0;
  i {
    color: ${C.IgnitusBlue};
    font-size: 2em;
    margin-right: 0.7em;
  }
`;

export const TextIconContent = styled.span`
  color: ${C.IgnitusBlue}
`;

export const SocialContact = styled(flexibleColDiv)`
  flex: 100%;
  p {
    flex: 1 1 100%;
  }
`;

export const ProfileBookmarkIcon = styled(BookmarkIcon)`
  height: 2rem;
  fill: ${C.IgnitusBlue};
`;

export const SendMessageIcon = styled(ChatMessageIcon)`
  height: 1.5rem;
`;

export const ResumeIcon = styled(FileIcon)`
  height: 1.5rem;
`;

export const LocationIcon = styled(MapMarkerIcon)`
  height: 1.2rem;
  position: relative;
  top: -10px;
`;

export const DropDownBtnContainer = styled.div`
  flex: 100%;
  position: relative;
`;

export const DropDownBtn = styled.div`
  font-weight: bold;
  color: ${C.Grey3};
  cursor: pointer;
  display: inline-block;
  padding: 10px 0;
  transition: all 0.4s;
  width: fit-content;
  
  &:hover {
    ul {
      display: block;
    }
  }
`;

export const DropDownMenu = styled.ul`
  z-index: 50;
  position: absolute;
  top: 30px;
  left: 0;
  border-radius: 10px 0 10px 10px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  background-color: ${C.White};
  color: ${C.IgnitusBlue};
  display: none;
  font-weight: 400;

  &:hover {
    display: block;
  }
`;

export const DropDownMenuListItem = styled.li`
  padding: 0.5em 1em;
  font-size: 14px;
  width: 200px;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    color: ${C.White};
    background-color: ${C.IgnitusBlue};
    cursor: pointer;
  }
`;
