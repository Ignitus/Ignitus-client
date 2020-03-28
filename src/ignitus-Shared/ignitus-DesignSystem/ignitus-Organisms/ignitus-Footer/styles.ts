import styled from '@emotion/styled';
import {maximumWidthQuery} from '../../ignitus-Atoms/media';
import {Heading3} from '../../ignitus-Atoms/typography';
import {White} from '../../ignitus-Atoms/colors';

type FooterLinkprops = {
  toggle: boolean;
};

export const StyledHeading = styled(Heading3)`
  color: ${White};

  ${maximumWidthQuery[1]} {
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  background-color: #000066;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 72rem;
  min-height: 20vh;

  ${maximumWidthQuery[1]} {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterSections = styled.div`
  margin: 0rem 2rem;
  width: max-content;

  > h5 {
    color: #fff;
    font-weight: bold;
  }

  > img {
    height: auto;
    margin-top: 1rem;
    width: 6rem;
    ${maximumWidthQuery[1]} {
      margin: 1rem;
    }
  }

  ${maximumWidthQuery[1]} {
    align-self: center;
    padding: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    max-width: 15rem;
    text-align: center;
    transition: max-height 1s ease-in;
  }
`;

export const FooterLinks = styled('ul')<FooterLinkprops>`
  display: flex;
  flex-direction: column;

  > li {
    padding: 2px;

    ${maximumWidthQuery[1]} {
      align-self: center;
    }

    > a:link,
    a:visited {
      color: #fff;
    }

    > a:hover,
    a:active {
      color: #f9bf64;
    }
  }

  ${maximumWidthQuery[1]} {
    display: ${props => (props.toggle ? `none` : 'block')};
  }
`;

export const Socials = styled.div`
  margin: 2rem auto;
  max-width: max-content;
`;

export const FooterSocial = styled.ul`
  display: flex;

  > li {
    padding: 0rem 0.5rem;

    > a:link,
    a:visited {
      color: #fff;
    }

    > a:hover,
    a:active {
      color: #f9bf64;
    }
  }
`;

export const Copyright = styled.p`
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`;
