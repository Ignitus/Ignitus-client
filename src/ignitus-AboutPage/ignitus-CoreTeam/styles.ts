/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

import {minimumWidthQuery, Heading6, Icon} from '../../ignitus-Shared';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as T from '../../ignitus-Shared/ignitus-DesignSystem/shared';

type LinkWrapperProps = {
  toggle: boolean;
};
type TeamItemTitleProps = {
  color: string;
};

export const TeamItemTitle = styled(Heading6)`
  color: ${C.Black};
  margin-top: 1rem;
`;

styled.a(props => ({color: props.color}));

export const LinkWrapper = styled.div<LinkWrapperProps>(
  {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '0.5rem',
  },
  props => ({display: props.toggle ? 'flex' : 'none'}),
);

export const PureCoreTeam = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TeamContainer = styled.div`
  display: grid;
  margin-top: 1.5rem;
  ${minimumWidthQuery[1]} {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: none;
  }
  ${minimumWidthQuery[2]} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }
  ${minimumWidthQuery[3]} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: none;
  }
  ${minimumWidthQuery[4]} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
  }
  ${minimumWidthQuery[5]} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
  }
`;

export const TeamItemImg = styled.img`
  border-radius: 100%;
  width: 6em;
`;

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-align: center;
  padding: 2rem;
  margin: 0.5rem;
  min-height: 12rem;
  background-color: ${C.White};
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  height: 100%;
`;

export const TeamCardContainer = styled.div`
  cursor: pointer;
  margin-top: 0.5em;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const LinkedIn = styled(Icon)`
  height: 1.2rem;
  fill: ${C.Black};
  &:hover {
    fill: ${C.LinkedinIconColor};
  }
`;

export const AngelList = styled(Icon)`
  height: 1.2rem;
  fill: ${C.Black};
  &:hover {
    fill: ${C.GreyText};
  }
`;

export const Link = styled(T.Link)<TeamItemTitleProps>(props => ({
  color: props.color,
}));
