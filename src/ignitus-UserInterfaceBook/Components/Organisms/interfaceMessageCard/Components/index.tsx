import React from 'react';
import { MessageCard, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { MessageData } from '../constants';

export const MessageList = flexibleColDiv;

export const interfaceMessageCard: React.FC = () => (
  <Interface>
    <Heading2>Message Card</Heading2>
    <hr />
    <div style={{ width: '30rem' }}>
      <MessageList>
        {MessageData.map(({ name, ...rest }) => (
          <React.Fragment key={name}>
            <MessageCard name={name} {...rest} />
          </React.Fragment>
        ))}
      </MessageList>
    </div>
  </Interface>
);
