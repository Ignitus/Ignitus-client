/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../ignitus-Helpers/emotion-Styles/colors';
import * as F from '../../ignitus-Helpers/emotion-Styles/font';


type LinkWrapperProps = {
	toggle: boolean;
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

styled.a(props => ({ color: props.color }));

export const LinkWrapper = styled.div<LinkWrapperProps>(
  {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  props => ({ display: props.toggle ? 'flex' : 'none' }),
);

export const PureCoreTeam = styled.div`
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2em auto 0em auto;
  max-width: 1046px;
`;

export const TeamItemImg = styled.img`
  border-radius: 100%;
  width: 7em;
`;

export const Section = styled.div`
  border-radius: 16px;
  min-height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 0.5em 0.5em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const TeamCard = styled.div`
  cursor: pointer;
  ${mq[0]} {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  ${mq[1]} {
    flex: 0 0 25%;
    max-width: 25%;
  }
  ${mq[2]} {
    flex: 0 0 23%;
    max-width: 23%;
  }

  &:hover {
    transform: scale(1.01);
    transition: .5s;
  }
`;
