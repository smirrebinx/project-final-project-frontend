import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 5rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(223px, 1fr));
  }

  @media (min-width: 1024px) {
    max-width: 70%;
    margin: 0 auto;
  }
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 110px;
height: 130px;
padding: 10px;
margin: 0 auto;
box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.06);
justify-content: center;
background-color: #fff;
border-radius: 3px;
border: 1px solid rgba(0, 0, 0, 0.1);
cursor: pointer;

 &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 1024px) {
    width: 170px;
    height: 110px;
    margin: 10rem auto;
  }
`;

export const CardSelected = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 170px;
height: 110px;
padding: 10px;
margin: 0 auto;
box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.06);
justify-content: center;
background-color: #fff;
border-radius: 3px;
border: 5px solid var(--submit-button-color-two);
cursor: pointer;
`;

export const StyledSecondHeadingCards = styled.h2`
font-family: var(--paragraph-font-family-two);
text-align: center;
font-weight: 600;
font-size: 1rem;
letter-spacing: 0.05em;
color: #4e585a;
margin-top: 10px;
text-decoration: none;
`

export const StyledParagraphBookingCards = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 4rem;
`;

// export const StyledButtonCards = styled.button`
//     background-color: var(--submit-button-color-two);
//     border: none;
//     color: #fff;
//     padding: 10px 30px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     margin: 10px 2px;
//     cursor: pointer;
//     width: 100%;
//   `