import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const NameContainer = styled.div`
text-align:center;
`;

export const IconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--footer-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: auto;

  @media (min-width: 1064px) {
    flex-direction: row;
  }
`;

export const StyledFooterHeaderTwo = styled.h3`
  color: var(--footer-color-one);
  font-family: var(--headings-font-family-two);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin: 0.2rem;
  color: #000;
`;
