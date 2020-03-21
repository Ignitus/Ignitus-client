import styled from '@emotion/styled';
import * as T from '../../ignitus-Atoms/atoms';
import * as C from '../../ignitus-Atoms/colors';
import { 
  flexibleColDiv,
	flexibleRowDiv,
	ParagraphIcon
 } from '../../shared';
import { Normal, MD} from '../../ignitus-Atoms/fonts';
import ChatMessageIcon from '../../ignitus-Assets/ignitus-Icons/chatMessageIcon/chatMessageIcon';
import FileIcon from '../../ignitus-Assets/ignitus-Icons/fileIcon/fileIcon';
import BookmarkIcon from '../../ignitus-Assets/ignitus-Icons/bookmarkIcon/bookmarkIcon';

import { Paragraph } from '../../shared';


export const ProfileDiv = styled(flexibleColDiv)`
  padding: 2rem;
  margin-top: 100px;
`;

export const ProfileContainer = styled(flexibleRowDiv)`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: ${C.White};
  margin: 0.5rem;
	padding: 1rem;
	padding-top: 3px;
	width: 100%;
	flex-wrap: wrap;
`;

export const ProfileTrack = styled.div`
	 flex: 1 100%;
	 text-align: end;
`

export const BookmarkIconDiv = styled(ParagraphIcon)`
	 padding-left: 0;
	 padding-right: 2em;
	 text-align: right;
	 svg {
		 left: initial;
		 right: 0;
		 font-size: 2em;
		 top: -5px;
	 }
`

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
`
export const DetailsContainer = styled.div`
	 flex: auto;
	 padding: 0.5em 0 0 1.5em;
`
export const ProfileHeading = styled(T.Heading1)`
	 flex:1
`

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
`
export const SocialContact = styled(flexibleColDiv)`
	flex: 100%;
	p {
		flex: 1 1 100%;
	}
`
export const ProfileBookmarkIcon = styled(BookmarkIcon)`
	height: 2rem;
	fill: ${C.IgnitusBlue};
`
export const SendMessageIcon = styled(ChatMessageIcon)`
  height: 1.5rem;
  fill: ${C.IgnitusBlue};
`;

export const ResumeIcon = styled(FileIcon)`
	height: 1.5rem;
	fill: ${C.IgnitusBlue};
`






