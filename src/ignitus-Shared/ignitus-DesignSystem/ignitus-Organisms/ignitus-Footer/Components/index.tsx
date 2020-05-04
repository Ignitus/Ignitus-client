/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

import { Props } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

import * as S from '../styles';

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
          <li>
            {' '}
            <a href="#!">Resume</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#!">Opportunities</a>
          </li>
          <li>
            {' '}
            <a href="#!">Interships</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#!">OpenSource</a>{' '}
          </li>
        </S.FooterLinks>
      </S.FooterSections>

      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('communityToggle')}>
          Community
        </S.StyledHeading>
        <S.FooterLinks toggle={communityToggle}>
          <li>
            {' '}
            <a href="#!">Personal</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#!">Partners</a>{' '}
          </li>
          <li>
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.quora.com/What-are-Ignitus-and-WooTech-about"
            >
              Ignitus Woo-Tech
            </a>{' '}
          </li>
          <li>
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@afelio_22020/introducing-ignitus-scholar-6b0c677ba9d7"
            >
              Ignitus Scholar
            </a>{' '}
          </li>
        </S.FooterLinks>
      </S.FooterSections>
      <S.FooterSections>
        <S.Logo name={AppIcon.IgnitusLogo} />
      </S.FooterSections>

      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('companyToggle')}>
          Company
        </S.StyledHeading>
        <S.FooterLinks toggle={companyToggle}>
          <li>
            {' '}
            <Link to="/aboutus">About</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/careersPage">Careers</Link>{' '}
          </li>
          <li>
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="/#">
              Blog
            </a>{' '}
          </li>
        </S.FooterLinks>
      </S.FooterSections>

      <S.FooterSections>
        <S.StyledHeading onClick={() => hideUnhide('linkToggle')}>
          Links
        </S.StyledHeading>
        <S.FooterLinks toggle={linkToggle}>
          <li>
            {' '}
            <Link to="/#!">Home</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/#what-we-do">What we Do?</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/interface">Design System</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/#contributors">Contributors</Link>{' '}
          </li>
        </S.FooterLinks>
      </S.FooterSections>
    </S.Container>

    <S.Socials>
      <S.FooterSocial>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Ignitus.org/"
          >
            {' '}
            <S.Icon name={AppIcon.FacebookIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ignitus_org/"
          >
            {' '}
            <S.Icon name={AppIcon.TwitterIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://angel.co/ignitus-2"
          >
            {' '}
            <S.Icon name={AppIcon.AngelListIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bit.ly/JoinIgnitusSlack"
          >
            {' '}
            <S.Icon name={AppIcon.SlackIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/13733583/admin/updates/"
          >
            {' '}
            <S.Icon name={AppIcon.LinkedInIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ignitus"
          >
            {' '}
            <S.Icon name={AppIcon.GithubIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@social_63397"
          >
            {' '}
            <S.Icon name={AppIcon.MediumIcon} />
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCW2BmTcaghAmhELP4_RdRrw"
          >
            {' '}
            <S.Icon name={AppIcon.YouTubeIcon} />
          </a>{' '}
        </li>
      </S.FooterSocial>
    </S.Socials>
    <S.Copyright>&copy; 2018 Copyright Ignitus</S.Copyright>
  </S.Footer>
);

export const Footer = withErrorBoundary(() => {
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
});
