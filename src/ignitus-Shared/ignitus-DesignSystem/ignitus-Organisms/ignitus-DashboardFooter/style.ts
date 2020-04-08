import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import {flexibleColDiv, flexibleRowDiv} from '../../shared';
import {PrimaryFamily, XS} from '../../ignitus-Atoms/fonts';

export const Footer = styled.footer`
  background-color: ${C.White};
  box-shadow: 0 2px 4px 0 ${C.boxShadow};
  border-radius: 1rem;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
`;

export const Column = styled(flexibleColDiv)``;

export const FooterSections = styled(flexibleRowDiv)``;

export const FooterRow = styled.ul`
  color: ${C.GreySecondaryText};
  font-size: ${XS};
  font-family: ${PrimaryFamily};
  padding: 0.4rem;
  display: flex;
  flex-direction: row;
  li {
    padding: 0rem 1rem;

    a {
      &:link,
      &:visited {
        color: #3d3d3d;
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
  margin-top: 15px;
  margin-bottom: 0;
`;
