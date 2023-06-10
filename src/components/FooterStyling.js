import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  max-width: 100%;
  height: 2rem;
  padding: 1.6rem 47rem;
  background-color: var(--footer-background-color);
`;

export const StyledFooterHeaderTwo = styled.h3`
  color: var(--second-headings-font-color-two);
  font-family: var(--headings-font-family-two);
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  /* @media (min-width: 1024px) {
   text-align: left;
} */
`;