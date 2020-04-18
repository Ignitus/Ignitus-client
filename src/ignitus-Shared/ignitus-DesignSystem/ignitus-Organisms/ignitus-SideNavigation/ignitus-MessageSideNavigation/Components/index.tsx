import React from 'react';
import * as S from '../style';
import {Paragraph} from '../../../../ignitus-Atoms/typography';
import { IgnitusBlue } from '../../../../ignitus-Atoms/colors';

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
    <Paragraph color={IgnitusBlue}>{text}</Paragraph> <Notification />
  </S.Layer>
);

const Notification = () => <S.Notification>4</S.Notification>;
