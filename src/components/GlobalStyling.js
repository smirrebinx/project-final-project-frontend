import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const OuterWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin-top: 6rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 6rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 70%;
  margin: 0 auto;

  &:hover {
    text-decoration: underline;
  }
`;

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
`;

export const CardReview = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: var(--paragraph-font-family-one);
font-size: 1.4rem;
width: 35vh;
height: auto;
padding: 2rem 2rem 3rem;
margin: 1rem auto;
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

export const StyledAvatarLoginOut = styled.div`
  display: grid;
  justify-content: end;
  align-content: start;
  position: relative;

   /* @media (min-width: 1024px) {
      margin-right: 10rem;
   } */
`;