import React from 'react';
import { OverlayShare, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import * as C from '../../../../../ignitus-Shared';

export const interfaceOverlayShare = () => (
  <Interface>
    <Heading2>Overlay Share</Heading2>
    <hr />
    <OverlayShare
      title='Share'
      Share='Share to'
      Link='Direct link'
      LinkedinColor={C.LinkedinIconColor}
      TwitterColor={C.TwitterIconColor}
      RedditColor={C.RedditIconColor}
      FacebookColor={C.FacebookIconColor}
      White={C.White}
      GreyOne={C.GreyOne}
    />
  </Interface>
);
