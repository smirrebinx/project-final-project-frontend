import styled, { keyframes } from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const StyledParagraphBooking = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
  color: var(--second-headings-font-color-two);
  animation: ${glideInAnimation} 1s forwards;
`;