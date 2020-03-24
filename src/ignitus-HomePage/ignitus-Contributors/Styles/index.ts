/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import HeartIcon from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/heartIcon/heartIcon';
import { mq } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const Icon = styled.span`
  i { color: ${C.Red};}
`;

export const BottomRow = styled(T.BottomRow)`
  justify-content: unset;
`;

export const Card = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin: 0.5em;
  padding: 0.3em;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${C.White};

  ${mq[0]} {
    flex: 0 0 43%;
    max-width: 43%;
  }
  ${mq[1]} {
    flex: 0 0 28.33333%;
    max-width: 28.33333%;
  }
  ${mq[2]} {
    flex: 0 0 30.33333%;
    max-width: 30.33333%;
  }
`;

export const CardPicture = styled.img`
  max-width: 100%;
  height: 75%;
  object-fit: contain;
  padding: 0.3em;
`;

export const Heart = styled(HeartIcon)`
  height: 1rem;
  fill: ${C.Red};
`;
