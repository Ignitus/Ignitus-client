import React from 'react';
import styled from '@emotion/styled';
import { MessageCard, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { MessageData } from '../constants';

export const MessageList = styled(flexibleColDiv)``;

export const interfaceMessageCard: React.FC = () => (
  <Interface>
    <Heading2>Message Card</Heading2>
    <hr />
    <div
      style={{
        width: '30vw',
        height: '30vh',
      }}
    >
      <MessageList>
        {MessageData.map(({ name, ...rest }) => (
          <React.Fragment key={name}>
            <MessageCard name={name} {...rest} />
            <br />
          </React.Fragment>
        ))}
      </MessageList>
    </div>
  </Interface>
);
