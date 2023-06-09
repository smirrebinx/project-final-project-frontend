import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 37.5rem;
  margin: auto;
  margin-top: 1.25rem;
  padding: 0.25rem;
  border-radius: 3px;
  
  button {
    background-color: transparent;
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding-top: 0.80rem;
    padding-bottom: 0.80rem;
    font-weight: 600;
    color: var(--second-headings-font-color-two);
  }

  .react-calendar__navigation__label {
      font-weight: bold;
      color: #000;
    }
`;

export const StyledHeaderBooking = styled.h1`
  font-weight: 600;
  font-family: var(--headings-font-color-two);
  text-align: center;
`;

export const StyledParagraphBooking = styled.h1`
  font-weight: 400;
  font-family: var(--paragraph-font-color-two);
  text-align: center;
  font-size: 1rem;
`;
