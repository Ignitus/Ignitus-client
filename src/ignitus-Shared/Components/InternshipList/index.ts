import styled from '@emotion/styled';
import * as T from '../emotionStyles/shared'
import * as C from '../emotionStyles/colors'

export const InternshipTitle = styled(T.Title)`
  color:orange
`;

export const SubHeading = styled(T.Title)`
  font-size: 1.2em;
`

export const Description = styled(T.Paragraph)`
	color: grey;
	margin-bottom: 3px;
`

export const DateInfo = styled(T.Paragraph)`
	color: grey;
	right: 0;
	position: absolute;
	top: 10px;
	padding: 10px;
	@media (max-width: 576px) {
		right: initial;
		left: 0;
		padding-left: 0;
	}
`
export const ApplyBtn = styled(T.Paragraph)`
	font-size: 1.1em;
	cursor: pointer;
	color: ${C.IgnitusBlue};
	right:0;
	position: absolute;
	bottom: 0;
	padding: 10px;
	@media (max-width: 576px)
	{
		bottom: initial;
		top: 0;
	}
`