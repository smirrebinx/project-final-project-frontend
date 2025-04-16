import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2rem auto;
  min-height: 100%;

  @media (min-width: 1024px) {
     min-height: 100%;
     width: 100vh;
     margin-top: 2rem;
     margin-bottom: 2rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem auto;
  width: 20rem;

  @media (min-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const StyledHomeImage = styled.img`
display: block;
margin: 0.2rem auto;
width: 2.8rem;
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 70%;
  margin: 1rem auto;
  font-size: 1.3rem;
  font-family: var(--paragraph-font-family-two);

  &:hover {
    text-decoration: underline;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  img {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 667px){
  display: none;
}
  @media (min-width: 1024px){
    display: none;
}
`

const glideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledParagraphAnimation = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
  color: var(--second-headings-font-color-two);
  animation: ${glideInAnimation} 1s forwards;
  margin-top: 3rem;

  @media (min-width: 1024px) {
    margin-top: 4rem;
  }
`;

export const CardReview = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: var(--paragraph-font-family-one);
font-size: 1.4rem;
width: 30vh;
height: auto;
padding: 2rem 2rem 3rem;
margin: 2rem auto;
box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.06);
justify-content: center;
background-color: #fff;
border-radius: 3px;
border: 1px solid rgba(0, 0, 0, 0.1);


  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(13.9375rem, 1fr));
    max-width: 70%;
    margin: 0 auto;
    font-size: 1.2rem;
    width: 18.75rem;
    height: 6.25rem;
  }
`;

export const StyledLogOutButton = styled.button`
    cursor: pointer;
    padding: 0.4rem;
    border: 2px solid var(--submit-button-color-two);
    border-radius: 0.25rem;
    text-align: center;
    margin: 1rem 1rem;
    box-shadow: var(--box-shadow);
`;

export const StyledCancelCloseButton = styled.button`
    cursor: pointer;
    padding: 0.4rem;
    border: 2px solid var(--submit-button-color-two);
    border-radius: 0.25rem;
    text-align: center;
    margin: 1rem 1rem;
    box-shadow: var(--box-shadow);
`;

export const StyledQuestionImage = styled.img`
width: 2rem;
opacity: 0.5;
`;

export const StyledQuestionIcon = styled.div`
  display: flex;
  justify-content: start;
  align-content: start;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-family: var(--paragraph-font-family-two);
  margin: 1.5rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    font-size: 1.2rem;
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
`;

export const StyledLi = styled.li`
list-style: none;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  margin-bottom: 2rem;
`;
