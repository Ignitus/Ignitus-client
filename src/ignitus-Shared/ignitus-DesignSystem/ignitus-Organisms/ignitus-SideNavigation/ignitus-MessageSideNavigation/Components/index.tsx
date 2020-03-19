import React from 'react';
import * as S from '../style';

type props = {
  text: string;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
};

export default function MessageSideNavigation() {
  return (
    <S.MessageContainer>
      <Layer text="Direct Messages" marginTop={true} />
      <Layer text="Mentors" />
      <Layer text="Organizations" />
      <Layer text="Groups" border={false} marginBottom={true} />
    </S.MessageContainer>
  );
}

const Layer = ({
  text,
  border = true,
  marginTop = false,
  marginBottom = false,
}: props) => (
  <S.Layer border={border} marginTop={marginTop} marginBottom={marginBottom}>
    {text}
  </S.Layer>
);
