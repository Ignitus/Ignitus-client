/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../Styles/style.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Shared/Components/errorBoundary';
import { logo } from './Constants';

const PureFooter = ({
  hideUnhide, featuresToggle, communityToggle, companyToggle, linkToggle,
}) => (
  <footer className="footer-bg text-white mt-4" id="footer-bg-id">
    <div className="container text-center text-md-left">
      <div className="row">
        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 mx-auto nav-accordion">
          <div
            className={
              featuresToggle === true ? 'navigation' : 'navigation open'
            }
          >
            <h5
              className="mt-3 mb-4 heading"
              onClick={() => hideUnhide('featuresToggle')}
            >
              Features
            </h5>
            <ul className="list-unstyled hidden">
              <li>
                <a className="link" href="#!">
                  Resume
                </a>
              </li>
              <li>
                <a className="link" href="#!">
                  Opportunities
                </a>
              </li>
              <li>
                <a className="link" href="#!">
                  Internships
                </a>
              </li>
              <li>
                <a className="link" href="#!">
                  Open Source
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 mx-auto nav-accordion">
          <div
            className={
              communityToggle === true ? 'navigation' : 'navigation open'
            }
          >
            <h5
              className="mt-3 mb-4 heading"
              onClick={() => hideUnhide('communityToggle')}
            >
              Community
            </h5>
            <ul className="list-unstyled">
              <li>
                <a className="link" href="#!">
                  Personal
                </a>
              </li>
              <li>
                <HashLink to="/#partners">
                  <span className="link">Partners</span>
                </HashLink>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.quora.com/What-are-Ignitus-and-WooTech-about"
                >
                  Ignitus Woo-Tech
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@afelio_22020/introducing-ignitus-scholar-6b0c677ba9d7"
                >
                  Ignitus Scholar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 mx-auto pd-left">
          <ul className="list-unstyled">
            <li>
              <img src={logo} className="img-responsive img-css" alt="logo" />
            </li>
          </ul>
        </div>

        <div className="col-md-2 mx-auto nav-accordion">
          <div
            className={
              companyToggle === true ? 'navigation' : 'navigation open'
            }
          >
            <h5
              className=" mt-3 mb-4 heading"
              onClick={() => hideUnhide('companyToggle')}
            >
              Company
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/Ignitus.org/"
                >
                  About
                </a>
              </li>
              <li>
              <Link to="/CareersHome">
                <span className="link" href="/CareersHome">
                  Careers
                </span>
              </Link>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/swlh/ignitus-connecting-students-with-opportunities-61f08e19861c"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 mx-auto nav-accordion">
          <div
            className={linkToggle === true ? 'navigation' : 'navigation open'}
          >
            <h5
              className=" mt-3 mb-4 heading"
              onClick={() => hideUnhide('linkToggle')}
            >
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <HashLink to="/#!">
                  <span className="link">Home</span>
                </HashLink>
              </li>
              <li>
                <HashLink to="/#what-we-do">
                  <span className="link">What we provide?</span>
                </HashLink>
              </li>
              <li>
                <HashLink to="/#contributors">
                  <span className="link">Contributors</span>
                </HashLink>
              </li>
              <li>
                <Link to="/aboutus">
                  <span className="link">About us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="clearfix w-100 d-md-none" />
      </div>
    </div>

    <ul className="list-unstyled list-inline text-center ">
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Ignitus.org/"
        >
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ignitus_org"
        >
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://angel.co/ignitus-2"
        >
          <i className="fa fa-angellist" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="http://bit.do/join-ignitus"
        >
          <i className="fa fa-slack" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/13733583/admin/updates/"
        >
          <i className="fa fa-linkedin" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ignitus"
        >
          <i className="fa fa-github" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@social_63397"
        >
          <i className="fa fa-medium" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn-floating mx-1 link social-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCW2BmTcaghAmhELP4_RdRrw"
        >
          <i className="fa fa-youtube" />
        </a>
      </li>
    </ul>

    <div className="footer-copyright text-center py-3 heading">
      © 2018 Copyright Ignitus
    </div>
  </footer>
);

const Footer = () => {
  const [featuresToggle, setFeaturesToggle] = useState(true);
  const [communityToggle, setCommunityToggle] = useState(true);
  const [companyToggle, setCompanyToggle] = useState(true);
  const [linkToggle, setLinkToggle] = useState(true);

  const hideUnhide = (toToggle) => {
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
};

export default withErrorBoundary(Footer);
