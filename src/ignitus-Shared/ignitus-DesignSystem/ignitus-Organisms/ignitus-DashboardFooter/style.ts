import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import {flexibleColDiv} from '../../shared';
import {PrimaryFamily, Normal, XS} from '../../ignitus-Atoms/fonts';


export const Footer = styled.footer`
  background-color: ${C.White};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding-top: 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 72rem;
  min-height: 10vh;
`;

export const Column = styled(flexibleColDiv)``;

export const FooterSections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: centre;
`;

export const FooterRow = styled.ul`
  color: ${C.GreySecondaryText};
  font-size: ${XS};
  font-family: ${PrimaryFamily};
  padding: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  li {
    padding: 0rem 1rem;

    a {
      &:link,
      &:visited {
        color: #3D3D3D;
      }
    }

    a {
      &:hover,
      &:active {
        color: ${C.IgnitusBlue};
      }
    }
  }
`;

export const Copyright = styled.p`
  color: ${C.IgnitusBlue};
  font-family: ${PrimaryFamily};
  font-size: ${XS};
  text-align: center;
`;

