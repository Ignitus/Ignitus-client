/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import {HashLink} from 'react-router-hash-link';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { logo } from '../constants';
import * as S from '../styles';
import { Props } from '../types';

const PureFooter: React.FunctionComponent<Props> = ({
  hideUnhide,
  featuresToggle,
  communityToggle,
  companyToggle,
  linkToggle,
}) => (
  <S.Footer>
    <S.Container>
      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('featuresToggle')}>
          Features
        </S.StyledHeading>
        <S.FooterLinks toggle={featuresToggle}>
          <li> <a href="#!">Resume</a> </li>
          <li> <a href="#!">Opportunities</a></li>
          <li> <a href="#!">Interships</a> </li>
          <li> <a href="#!">OpenSource</a> </li>
        </S.FooterLinks>
      </S.FooterSections>

      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('communityToggle')}>
          Community
        </S.StyledHeading>
        <S.FooterLinks toggle={communityToggle}>
           <li> <a href="#!">Personal</a> </li>
           <li> <a href="#!">Partners</a> </li>
           <li> <a target="_blank" rel="noopener noreferrer" href="https://www.quora.com/What-are-Ignitus-and-WooTech-about">Ignitus Woo-Tech</a> </li>
           <li> <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@afelio_22020/introducing-ignitus-scholar-6b0c677ba9d7">Ignitus Scholar</a> </li>
        </S.FooterLinks>
      </S.FooterSections>
      <S.FooterSections>
        <img src={logo} alt="logo" />
      </S.FooterSections>

      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('companyToggle')}>
          Company
        </S.StyledHeading>
        <S.FooterLinks toggle={companyToggle}>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Ignitus.org/">About</a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://angel.co/ignitus-2/jobs">Careers</a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://medium.com/swlh/ignitus-connecting-students-with-opportunities-61f08e19861c">Blog</a> </li>
        </S.FooterLinks>
      </S.FooterSections>

      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('linkToggle')}>
          Links
        </S.StyledHeading>
        <S.FooterLinks toggle={linkToggle}>
        <li> <HashLink to="/#!">Home</HashLink> </li>
        <li> <HashLink to="/#what-we-do">What we Do?</HashLink> </li>
        <li> <HashLink to="/interface">Design System</HashLink> </li>
        <li> <HashLink to="/#contributors">Contributors</HashLink> </li>
        </S.FooterLinks>
      </S.FooterSections>
    </S.Container>

    <S.Socials>
      <S.FooterSocial>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Ignitus.org/"> <i className="fa fa-facebook"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ignitus_org/"> <i className="fa fa-twitter"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://angel.co/ignitus-2"> <i className="fa fa-angellist"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/JoinIgnitusSlack"> <i className="fa fa-slack"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/13733583/admin/updates/"> <i className="fa fa-linkedin"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ignitus"> <i className="fa fa-github"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@social_63397"> <i className="fa fa-medium"/></a> </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCW2BmTcaghAmhELP4_RdRrw"> <i className="fa fa-youtube"/></a> </li>
      </S.FooterSocial>
    </S.Socials>
    <S.Copyright>&copy; 2018 Copyright Ignitus</S.Copyright>
  </S.Footer>
);

export const Footer = withErrorBoundary((() => {
  const [featuresToggle, setFeaturesToggle] = useState(true);
  const [communityToggle, setCommunityToggle] = useState(true);
  const [companyToggle, setCompanyToggle] = useState(true);
  const [linkToggle, setLinkToggle] = useState(true);

  const hideUnhide = toToggle => {
    if (toToggle === 'featuresToggle') {
      setFeaturesToggle(!featuresToggle);
    }

    if (toToggle === 'communityToggle') {
      setCommunityToggle(!communityToggle);
    }

    if (toToggle === 'companyToggle') {
      setCompanyToggle(!companyToggle);
    }

    if (toToggle === 'linkToggle') {
      setLinkToggle(!linkToggle);
    }
  };

  return (
    <PureFooter
      hideUnhide={hideUnhide}
      featuresToggle={featuresToggle}
      communityToggle={communityToggle}
      companyToggle={companyToggle}
      linkToggle={linkToggle}
    />
  );
}));

