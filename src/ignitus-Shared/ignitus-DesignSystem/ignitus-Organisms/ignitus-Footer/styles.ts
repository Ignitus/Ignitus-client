import styled from '@emotion/styled';
import {maximumWidthQuery} from '../../ignitus-Atoms/media';
import {Heading3} from '../../ignitus-Atoms/typography';
import {White, SecondaryColor, IgnitusBlue} from '../../ignitus-Atoms/colors';
import {FooterLinkprops} from './types';
import {default as I} from '../../../ignitus-Utilities/Components/icon';

export const StyledHeading = styled(Heading3)`
  color: ${White};
  ${maximumWidthQuery[3]} {
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  background-color: ${IgnitusBlue};
  padding-bottom: 1rem;
  padding-top: 2rem;
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 72rem;
  min-height: 20vh;
  ${maximumWidthQuery[3]} {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterSections = styled.div`
  margin: 0 2rem;
  width: max-content;
  h5 {
    color: ${White};
    font-weight: bold;
  }
  ${maximumWidthQuery[3]} {
    align-self: center;
    padding: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    max-width: 15rem;
    text-align: center;
    transition: max-height 1s ease-in;
  }
`;

export const Logo = styled(I)`
  margin-top: 1rem;
  width: 5rem;
  ${maximumWidthQuery[3]} {
    margin: 1rem;
  }
  path {
    fill: ${White};
  }
`;

export const FooterLinks = styled('ul')<FooterLinkprops>`
  display: flex;
  flex-direction: column;
  li {
    padding: 2px;
    ${maximumWidthQuery[3]} {
      align-self: center;
    }
    a {
      &:link,
      &:visited {
        color: ${White};
      }
    }
    a {
      &:hover,
      &:active {
        color: ${SecondaryColor};
      }
    }
  }
  ${maximumWidthQuery[3]} {
    display: ${props => (props.toggle ? `none` : 'block')};
  }
`;

export const Socials = styled.div`
  margin: 1rem auto;
  max-width: max-content;
`;

export const FooterSocial = styled.ul`
  display: flex;
  li {
    padding: 0rem 0.5rem;
    a {
      &:link,
      &:visited {
        color: ${White};
      }
    }
    a {
      &:hover,
      &:active {
        color: ${SecondaryColor};
      }
    }
  }
`;

export const Icon = styled(I)`
  width: 1rem;
  height: 1rem;
  fill: ${White};
  &:hover {
    fill: ${SecondaryColor};
  }
`;

export const Copyright = styled.p`
  color: ${White};
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`;
