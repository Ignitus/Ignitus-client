import React from 'react';
import { ModalShare, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import * as C from '../../../../../ignitus-Shared';

export const interfaceModalShare = () => (
  <Interface>
    <Heading2>Modal Share</Heading2>
    <hr />
    <ModalShare
      title="Share"
      Share="Share to"
      Link="Direct link"
      LinkedinColor={C.LinkedinIconColor}
      TwitterColor={C.TwitterIconColor}
      RedditColor={C.RedditIconColor}
      FacebookColor={C.FacebookIconColor}
      White={C.White}
      GreyOne={C.GreyOne}
    />
  </Interface>
);
