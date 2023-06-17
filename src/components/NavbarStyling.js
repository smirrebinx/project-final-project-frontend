import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-width: 0;
    max-width: 100%;
    box-sizing: content-box;
    margin: 0;
    overflow-x: hidden;
  }
`;

export const StickyNav = styled(Nav)`
  position: absolute;
  top: 0;
  height: 3rem;
  padding: 0 2rem;
  width: 100%;
  transition: top 0.3s ease-in-out;
  background-color: var(--navbar-background-color-one);
  color: var(--navbar-color-one);

  &.sticky {
    position: fixed;
    top: 0;
  }
`;

export const GoToTreatmentButton = styled.button`
  display: flex;
  background-color: var(--navbar-button-color-one);
  padding: 0.8rem;
  border: none;
  color: var(--navbar-color-one);
  text-transform: uppercase;
  font-family: var(--paragraph-font-family-one);
  font-size: 1rem;
  letter-spacing: 0.05em;
  cursor: pointer;
`;

export const StyledLinkWrapper = styled.div.attrs({
  className: 'styled-link-wrapper'
})`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  & > a {
    text-decoration: none;
    cursor: pointer;
    color: var(--navbar-color-one);
    text-transform: uppercase;
    font-family: var(--paragraph-font-family-one);
    font-size: 1rem;
  }
`;

export const StickyNavTwo = styled(Nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.875rem;
  left: 50%;
  transform: translateX(-50%);
  height: 3.5rem;
  padding: 0 2rem;
  width: 100%;
  transition: top 0.3s ease-in-out;
  background-color: var(--navbar-background-color-two);
  margin-top: 2rem;

  &.sticky {
    position: fixed;
    top: 0;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const StyledNavHeaderTwo = styled.h1`
  text-shadow: 1px 1px 1px rgba(255, 255, 255); 
  font-family: var(--headings-font-family-two);
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

`;
