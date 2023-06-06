import styled from 'styled-components';

export const DesktopNavItems = styled.div`
display:block;
`;

export const Nav = styled.nav`
  position: relative;
  background-color: var(--navbar-background-color-one);
  color: var(--navbar-color-one);
  height: 3rem;
  padding: 0 2rem;
  z-index: 1;
  width: 100%;

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
  transition: top 0.3s ease-in-out;

  &.sticky {
    position: fixed;
    top: 0;
  }
`;

export const NavItem = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #E3F7FC;
  margin-right: 2rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogInButton = styled.button`
display: flex;
background-color: var(--navbar-button-color-one);
padding: 0.8rem;
border: none;
color: var(--navbar-color-one);
text-transform: uppercase;
font-family: var(--paragraph-font-family-one);
font-size: 1rem;
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
