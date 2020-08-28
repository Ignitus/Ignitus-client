import React from 'react';
import { MessageDetail, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { MessageData } from '../constants';

export const MessageList = flexibleColDiv;

export const interfaceMessageDetail: React.FC = () => (
  <Interface>
    <Heading2>Message Detail</Heading2>
    <hr />
    <div style={{ width: '50rem' }}>
      <MessageList>
        {MessageData.map(({ name, ...rest }) => (
          <React.Fragment key={name}>
            <MessageDetail name={name} {...rest} />
          </React.Fragment>
        ))}
      </MessageList>
    </div>
  </Interface>
);
