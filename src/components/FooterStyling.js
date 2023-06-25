import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const FooterContainer = styled.div`
  flex-shrink: 0;
  height: 5rem;
  background-color: var(--footer-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const StyledFooterHeaderTwo = styled.h3`
  color: #fff;
  font-family: var(--headings-font-family-two);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 1rem;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
font-size: 1.5rem;
margin: 0.2rem;
color: #fff;
`;
