import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const OuterWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

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
width: 300px;
height: 150px;
padding: 10px;
margin: 0 auto;
box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.06);
justify-content: center;
background-color: #fff;
border-radius: 3px;
border: 1px solid rgba(0, 0, 0, 0.1);
`;