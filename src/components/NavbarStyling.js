import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    min-width: 0;
    max-width: 100%;
    box-sizing: content-box;
    margin: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    z-index: 1;

  @media screen and (max-width: 1024px) {
    min-width: 0;
    max-width: 100%;
  }
`;

export const StyledNavbarLinkDiv = styled.div`
text-align: center;
`;

export const StickyNav = styled(Nav)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  padding: 0 2rem;
  transition: top 0.3s ease-in-out;
  background-color: var(--navbar-background-color-one);
  color: var(--navbar-color-one);
  
  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
`;

export const GoToTreatmentButton = styled.button`
  display: flex;
  background-color: var(--navbar-button-color-one);
  padding: 1rem;
  border: none;
  color: var(--navbar-color-one);
  text-transform: uppercase;
  font-family: var(--paragraph-font-family-one);
  font-size: 1rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  
  &:hover {
   text-decoration: underline;
 }
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

export const NavWrapper = styled.div`

  @media (max-width: 666px){
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1rem;
    position: fixed;
    right: 0;
    width: 75%;
    min-height: 60vh;
    overflow: hidden;
    background-color: #e4dec9;
    z-index: 9;
    transition: all 0.5s ease-in-out;
    ${(props) => !props.isOpen
    && `
      display: none;
    `}
  };

  @media (min-width: 667px){
    justify-content: flex-end;
    width: 100%;
    z-index: 0;
  }
  @media (min-width: 1024px){
    justify-content: center;
  }
`;

export const StickyNavTwo = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: top;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 2rem;
  transition: top 0.3s ease-in-out;
  background-color: var(--navbar-background-color-two);
  width: 85%;

  &.sticky {
    position: fixed;
    top: 0;
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 65%;

    &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
  }

`;

export const StyledNavHeaderTwo = styled.h1`
  font-family: var(--headings-font-family-two);
  font-size: 1.2rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 1024px) {
    margin: 0 auto;
  }

`;

export const NavIcon = styled.div`
    font-size: 1.2rem;
    color: #E3F7FC;
    cursor: pointer;
`;

export const MaterialIcon = styled.img`
width: 3rem;
`;

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: rgba(0, 0, 0, 0.5);
font-weight: 700;

  &:hover {
   text-decoration: underline;
   background-color: rgba(255, 255, 255, 0.3); 
 }
`;

export const StyledMenuBarButton = styled.button`
/* &&& = Increase the specificity of the component, making it override other button styles on the page.  */
 &&& {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const StyledNavButtonLinkDiv = styled.div`
text-align: right;
`;

export const MenuContainer = styled.div`
border: transparent;
`;

export const MenuItem = styled.ul`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 100vh;

  @media (min-width: 667px){
  flex-direction: row;
  height: 5vh;
  align-items: center;
  width: 85%;
}
  @media (min-width: 1024px){
  flex-direction: row;
}
`;

export const NavbarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 100; /* Ensure it appears on top of other elements */
  display: none; 

  &.active {
    display: block; /* Show the overlay when active */
  }
`;
