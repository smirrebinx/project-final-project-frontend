import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 2rem auto;
border: 0.625rem solid var(--circle-border-color-one);
border-radius: 50%;
background-color: var(--background-color-one);
max-width: 28.125rem;
height: 28.125rem;
text-align: center;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    max-width: 17.375rem;
    height: auto;
    margin: 2rem auto;
  }
`
export const StyledHeader = styled.h1`
font-family: var(--headings-font-family-one);
font-weight: 600;
font-size: 4.875rem;
text-transform: uppercase;
margin: 1.25rem;
color: var(--circle-border-color-one);
`
export const StyledSecondHeader = styled.h2`
font-weight: 400;
font-size: 1.5rem;
font-family:var(--paragraph-font-family-one);
text-transform: uppercase;
margin: 1.5rem;
color: var(--circle-border-color-one);
`