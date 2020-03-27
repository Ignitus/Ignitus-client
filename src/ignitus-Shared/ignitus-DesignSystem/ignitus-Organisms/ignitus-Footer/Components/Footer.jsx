/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../Styles/style.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { logo } from './Constants';

const PureFooter = ({
  hideUnhide, featuresToggle, communityToggle, companyToggle, linkToggle,
}) => (
  <footer className="footer" id="footer-bg-id">
      <div className="container">
        
        <div className="footer-parts">
          <h5 className="footer-head" onClick={() => hideUnhide('featuresToggle')}>Features</h5>
         
          <ul className={
            featuresToggle === true ? 'footerlinks' : 'footerlinks hide'
          }>
            <li className="footerlinks-item">
              <a href="#!" className="footerlink">Resume</a>
            </li>
            <li className="footerlinks-item">
              <a href="#!" className="footerlink">Opportunities</a>
            </li>
            <li className="footerlinks-item">
              <a href="#!" className="footerlink">Interships</a>
            </li>
            <li className="footerlinks-item">
              <a href="#!" className="footerlink">OpenSource</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-parts">
          <h5 className="footer-head" onClick={() => hideUnhide('communityToggle')}>Community</h5>
          <ul className={communityToggle === true ? 'footerlinks' : 'footerlinks hide'}>
            <li className="footerlinks-item">
              <a href="#!" className="footerlink">Personal</a>
            </li>
            <li className="footerlinks-item">
              <a href="#!" className="footerlink">Partners</a>
            </li>
            <li className="footerlinks-item">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.quora.com/What-are-Ignitus-and-WooTech-about"className="footerlink">Ignitus Woo-Tech</a>
            </li>
            <li className="footerlinks-item">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@afelio_22020/introducing-ignitus-scholar-6b0c677ba9d7" className="footerlink">Ignitus Scholar</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-parts">
          <img src={logo} className="footer-logo" alt="logo" />
        </div>
        
        <div className="footer-parts">
          <h5 className="footer-head" onClick={() => hideUnhide('companyToggle')}>Company</h5>
          <ul class="footerlinks" className={companyToggle === true ? 'footerlinks' : 'footerlinks hide'}>
            
            <li className="footerlinks-item">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Ignitus.org/" className="footerlink">About</a>
            </li>
            
            <li className="footerlinks-item">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://angel.co/ignitus-2/jobs" className="footerlink">Careers</a>
            </li>
            
            <li className="footerlinks-item">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/swlh/ignitus-connecting-students-with-opportunities-61f08e19861c" className="footerlink">Blog</a>
            </li>
          </ul>
        </div>
    
        <div className="footer-parts">
          <h5 className="footer-head" onClick={() => hideUnhide('linkToggle')}>Links</h5>
          <ul class="footerlinks" className={linkToggle === true ? 'footerlinks' : 'footerlinks hide'}>
            
            <li className="footerlinks-item">
              <HashLink to="/#!" className="footerlink">Home</HashLink>
            </li>
           
            <li className="footerlinks-item">
              <HashLink to="/#what-we-do" className="footerlink">What we provide?</HashLink>
            </li>
            
            <li className="footerlinks-item">
              <HashLink to="/#contributors" className="footerlink">Contributors</HashLink>
            </li>
           
            <li className="footerlinks-item">
              <Link href="/aboutus" className="footerlink">About us</Link>
            </li>
          </ul>
        </div>
    
    </div>
      
    <div className="socials">
      <ul className="footer-socials">
        
          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Ignitus.org/"><i className="fa fa-facebook" />
            </a>  
          </li>
          
          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ignitus_org" ><i className="fa fa-twitter" />
            </a>
          </li>

          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/ignitus-2" ><i className="fa fa-angellist" />
            </a>
          </li>

          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="http://bit.do/join-ignitus" ><i className="fa fa-slack" />
            </a>
          </li>

          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/13733583/admin/updates/" ><i className="fa fa-linkedin" />
            </a>
          </li>

          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ignitus" ><i className="fa fa-github" />
            </a>
          </li>

          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@social_63397" ><i className="fa fa-medium" />
            </a>
          </li>

          <li className="footer-social-item">
            <a className="footerlink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCW2BmTcaghAmhELP4_RdRrw" ><i className="fa fa-youtube" />
            </a>
          </li>


      </ul>
    </div>
  
      <p className="copyright">&copy; 2018 Copyright Ignitus</p>
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
      console.log("Toggle Clicked")
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
