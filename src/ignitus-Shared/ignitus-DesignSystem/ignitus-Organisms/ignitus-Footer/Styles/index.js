import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color:#000066;
  padding-bottom:1rem;
`;

export const Container = styled.div`
  align-items: flex-start;
  display:flex;
  justify-content: space-evenly;
  margin:0 auto;
  max-width:72rem;
  min-height:20vh;
  
  @media only screen and (max-width:792px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

`;

export const FooterParts = styled.div`
  margin:0rem 2rem;
  width:max-content;
  
  > h5{
    color:#fff;
    font-weight:bold;
  }

  > img{
    height:auto;
    margin-top: 1rem;
    width:6rem;
    @media only screen and (max-width:792px){
      margin:1rem;
    }
  }

  @media only screen and (max-width:792px) {
    align-self: center;
    padding:1rem;
    margin:0;
    margin-bottom:0.5rem;
    max-width:15rem;
    text-align:center;
    transition: max-height 1s ease-in;
  }

`;

export const FooterLinks = styled('ul')`
  display: flex;
  flex-direction: column;
 
  > li{
    padding:2px;

    @media only screen and (max-width:792px) {
      align-self: center;
    } 

    > a:link,a:visited{
      color:#fff;
    }

    > a:hover,a:active{
      color:#F9BF64;
    }
  }

  @media only screen and (max-width:792px) {
    display:  ${props => props.condition ? `none` : 'block'};
  }

`;

export const Socials = styled.div`
  margin:2rem auto;
  max-width:max-content;
  
`;

export const FooterSocial = styled.ul`
  display:flex;
  
  > li{
     padding:0rem 0.5rem;

    > a:link,a:visited{
      color:#fff;
    }

    > a:hover,a:active{
      color:#F9BF64;
    }
  }

`;

export const Copyright = styled.p`
  color:#fff;
  font-weight:bold;
  letter-spacing: 1px;
  text-align:center;
`;