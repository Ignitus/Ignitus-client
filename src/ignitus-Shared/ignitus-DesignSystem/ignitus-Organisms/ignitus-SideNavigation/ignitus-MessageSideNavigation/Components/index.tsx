import React from 'react';

import * as S from '../style';

export default function MessageSideNavigation() {
  return (
    <S.MessageContainer>
      <S.Layer text="Direct Messages" marginTop append={<Notification />} />
      <S.Layer text="Mentors" append={<Notification />} />
      <S.Layer text="Organizations" append={<Notification />} />
      <S.Layer
        text="Groups"
        border={false}
        marginBottom
        append={<Notification />}
      />
    </S.MessageContainer>
  );
}

const Notification = () => <S.Notification>4</S.Notification>;
