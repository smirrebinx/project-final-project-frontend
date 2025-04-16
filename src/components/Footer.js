import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterContainer, StyledFontAwesomeIcon, StyledFooterHeaderTwo, NameContainer, IconContainer } from './FooterStyling';

const Footer = () => {
  return (
    <FooterContainer>
      <NameContainer>
        <StyledFooterHeaderTwo>Michelle Wegler</StyledFooterHeaderTwo>
      </NameContainer>
      <IconContainer>
        <a href="https://www.linkedin.com/in/michellewegler/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <StyledFontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/smirrebinx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <StyledFontAwesomeIcon icon={faGithub} />
        </a>
      </IconContainer>
    </FooterContainer>
  )
}

export default Footer;
