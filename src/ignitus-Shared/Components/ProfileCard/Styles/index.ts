import styled from '@emotion/styled';
import * as T from '../../emotionStyles/shared';
import * as C from '../../emotionStyles/colors';

export const ProfileList = styled.ul`
	list-style-type:none;
	padding: 20px;
`
export const ListElement = styled.li`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
`
export const ProfileDetails = styled.div`
	padding-left: 200px;
	flex-basis: 50%;
	max-width: 50%;
`
export const ProfileDetailsHeader =styled(T.Title)`
`
export const ProfileDescription = styled(T.Paragraph)`
`
export const ProfileAvatar = styled(T.Avatar)`
	border-radius: 10px;

`
export const ProfileContact = styled.div`
	flex-basis: 50%;
	max-width: 50%;
`