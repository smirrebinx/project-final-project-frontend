import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 4rem auto;
  grid-template-columns: repeat(2, minmax(2rem, 1fr));
  width: 95%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(2rem, 1fr));
    width: 60%;
    margin: 6rem auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
  height: 8.125rem;
  padding: 1rem;
  margin: 0 auto;
  box-shadow: 0.0625rem 0.0625rem 0.4375rem 0
   rgba(0, 0, 0, 0.1), 0 0 0.0625rem 0 rgba(0, 0, 0, 0.06);
  justify-content: center;
  background-color: #fff;
  border-radius: 0.1875rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-0.125rem);
  }

  @media (min-width: 1024px) {
    width: 10.625rem;
    height: 6.875rem;
    margin: 0 2rem;
  }
`;

export const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.625rem;
`;

export const CardSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 10.625rem;
  height: 6.875rem;
  padding: 1rem;
  margin: 0 auto;
  font-size: 1.3rem;
  box-shadow: 0.0625rem 0.0625rem 0.4375rem 0 rgba(0, 0, 0, 0.1), 0 0 0.0625rem 0 rgba(0, 0, 0, 0.06);
  justify-content: center;
  background-color: #fff;
  border-radius: 0.1875rem;
  border: 0.3125rem solid var(--submit-button-color-two);
  cursor: pointer;

    @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

export const StyledSecondHeadingCards = styled.h2`
  font-family: var(--paragraph-font-family-two);
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  color: #4E5A58;
  margin-top: 0.625rem;
  text-decoration: none;
`;

export const StyledParagraphBookingCards = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-family: var(--paragraph-font-family-two);
  margin: 1rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    font-size: 1.2rem;
  }
`;
