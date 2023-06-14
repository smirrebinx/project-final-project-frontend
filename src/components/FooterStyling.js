import styled from 'styled-components';

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
  height: 4rem;
  background-color: var(--footer-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterHeaderTwo = styled.h3`
  color: var(--second-headings-font-color-two);
  font-family: var(--headings-font-family-two);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
