import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  margin-bottom: 2rem;
`;

export const ContentContainer = styled.div`
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  overflow: hidden; /* Prevent content overflow */ 
  margin-bottom: 2rem;
`;

export const FooterContainer = styled.div`
  flex-shrink: 0; 
  height: 2rem;
  width: 100%;
  background-color: var(--footer-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: absolute;
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
