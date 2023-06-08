import styled from 'styled-components';

export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(2, 1fr));
grid-gap: 2px;

@media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
}
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 170px;
height: 110px;
padding: 10px;
margin: 1rem;
box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.06);
justify-content: center;
background-color: #fff;
border-radius: 3px;
border: 1px solid rgba(0, 0, 0, 0.1);
cursor: pointer;
`;

export const StyledSecondHeadingCards = styled.h2`
font-family: var(--paragraph-font-family-two);
text-align: center;
font-weight: 600;
font-size: 1rem;
color: #4e585a;
margin-top: 10px;
`