import React from 'react';
import {HTMLAttributes} from 'react';

type Props = HTMLAttributes<SVGElement>;

const ChatMessageIcon = ({title = 'Chat Message Icon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      viewBox="0 0 30.57 30.571"
      {...rest}
    >
      <title>{title}</title>
			<path d="M28.412,9.697H27.57v9.255c0,1.441-0.838,2.745-2.521,2.745H8.57v0.44c0,1.274,1.449,2.56,2.937,2.56h12.601l4.819,2.834    l-0.7-2.834h0.186c1.486,0,2.158-1.284,2.158-2.56V11.894C30.57,10.62,29.898,9.697,28.412,9.697z"/>
		<path d="M8.76,20.04h14.002c1.684,0,3.238-1.021,3.238-2.462V8.192V5.978c0-1.442-1.555-2.938-3.238-2.938H3.622    C1.938,3.04,0,4.536,0,5.978v11.6c0,1.328,1.642,2.287,3.217,2.435l-1.025,3.891L8.76,20.04z M2,5.978    C2.081,5.727,2.925,5.04,3.622,5.04h19.14C23.411,5.04,24,5.715,24,5.978v11.6c-0.048,0.114-0.508,0.462-1.238,0.462H3.622    c-0.747,0-1.43-0.35-1.622-0.57V5.978z"/>
 </svg>
  );
};

export default ChatMessageIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
