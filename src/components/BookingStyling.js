import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0.25rem;
  border-radius: 3px;

 button {
    background-color: transparent;
    border: solid 0.0625rem rgba(0, 0, 0, 0.1);
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-weight: 600;
    color: var(--second-headings-font-color-two);
  }

  .react-calendar {
    width: 90%;
    height: auto;
    margin: 0 auto;
    box-shadow: var(--box-shadow);

     @media (min-width: 1024px) {
    width: 25rem;
  }
}

  .react-calendar__navigation__label {
    font-weight: bold;
    color: #000;
  }
`;

export const StyledParagraphBooking = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
  color: var(--second-headings-font-color-two);
  margin-top: 4rem;
`;

export const StyledButton = styled.button`
  background-color: var(--submit-button-color-two);
  border: none;
  color: #fff;
  padding: 0.625rem 1.875rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0.625rem 0.125rem;
  cursor: pointer;
  width: 100%;
  
`;
