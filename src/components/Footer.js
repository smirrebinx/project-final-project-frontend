import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterContainer, StyledFontAwesomeIcon, StyledFooterHeaderTwo } from './FooterStyling';

const Footer = () => {
  return (
    <FooterContainer>
      <StyledFooterHeaderTwo>Michelle Wegler</StyledFooterHeaderTwo>
      <a href="https://www.linkedin.com/in/michellewegler/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <StyledFontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/smirrebinx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <StyledFontAwesomeIcon icon={faGithub} />
      </a>
    </FooterContainer>
  )
}

export default Footer;
