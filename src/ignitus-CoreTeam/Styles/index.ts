/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../ignitus-Helpers/emotion-Styles/colors';
import * as F from '../../ignitus-Helpers/emotion-Styles/font';
import * as T from '../../ignitus-Helpers/emotion-Styles/shared';

type LinkWrapperProps = {
  toggle: boolean;
};
type TeamItemTitleProps = {
  color: string;
};

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Icon = styled.span`
  i {
    color: ${C.Red};
  }
`;

export const TeamItemTitle = styled.h6`
  margin-top: 1rem;
  font-weight: ${F.Normal};
  font-size: ${F.SM};
`;

styled.a(props => ({color: props.color}));

export const LinkWrapper = styled.div<LinkWrapperProps>(
  {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

export const TeamContainer = styled(T.Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
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
  padding: 1em;
  margin: 0.5em 0.5em;
  min-height: 3em;
  min-width: 3em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  height: 100%;
`;

export const TeamCardContainer = styled.div`
  cursor: pointer;
  margin-top: 0.5em;
  height: 15em;
  flex: 0 0 35%;
  max-width: 35%;

  @media (max-width: 420px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  ${mq[0]} {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  ${mq[1]} {
    flex: 0 0 26%;
    max-width: 26%;
  }
  ${mq[2]} {
    flex: 0 0 22%;
    max-width: 22%;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const Link = styled(T.Link)<TeamItemTitleProps>(props => ({
  color: props.color,
}));
